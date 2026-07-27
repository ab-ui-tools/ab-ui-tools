import type { JSX } from 'react';
import type { StoryFn } from '@storybook/react';
import type { TUploadError, TUploadFile, TUploadProps } from '@ab.uitools/ui-library/components/Upload';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AttachmentCard, ScrollableCarousel, Upload as _Upload } from '@ab.uitools/ui-library/components/Upload';
import { UploadFileStatus, generateFileId } from '@ab.uitools/ui-library/components/Upload';
import IconSend from '@ab.uitools/ui-library/components/SVGIcons/IconSend';
import IconInfo from '@ab.uitools/ui-library/components/SVGIcons/IconInfo';
import IconAttach from '@ab.uitools/ui-library/components/SVGIcons/IconAttach';
import { Input } from '@ab.uitools/ui-library/components/Input';
import { ButtonIcon } from '@ab.uitools/ui-library/components/ButtonIcon';
import { Button } from '@ab.uitools/ui-library/components/Button';

type TUploadStoryArgs = TUploadProps & {
  filesDemo?: 'none' | 'preset' | 'error';
};

export default {
  title: 'Upload',
  component: _Upload,
  parameters: {
    docs: {
      description: {
        component:
          'File upload component with drag and drop, validation, progress state, and a horizontal scrollable carousel that displays uploaded files.',
      },
    },
  },
  argTypes: {
    multiple: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    withDropZone: { control: 'boolean' },
    dropzoneSize: {
      control: { type: 'inline-radio' },
      options: ['default', 'small'],
    },
    filesLayout: {
      control: { type: 'inline-radio' },
      options: ['list', 'carousel'],
    },
    maxFiles: { control: { type: 'number', min: 1, max: 10, step: 1 } },
    filesDemo: {
      name: 'files demo',
      control: { type: 'inline-radio' },
      options: ['none', 'preset', 'error'],
      description: 'Seed the file list with preset or error-state files.',
    },
  },
};

const fromNativeFile = (file: File): TUploadFile => ({
  id: generateFileId(file),
  name: file.name,
  size: file.size,
  type: file.type,
  file,
  progress: 0,
  status: UploadFileStatus.uploading,
});

const trackFileProgress = (
  id: string,
  file: File,
  setFiles: React.Dispatch<React.SetStateAction<TUploadFile[]>>
): void => {
  const reader = new FileReader();

  reader.onprogress = (event: ProgressEvent<FileReader>): void => {
    if (!event.lengthComputable) return;
    const percent = Math.round((event.loaded / event.total) * 100);
    setFiles(prev =>
      prev.map(f => (f.id === id ? { ...f, progress: percent, status: UploadFileStatus.uploading } : f))
    );
  };

  reader.onload = (): void => {
    setFiles(prev => prev.map(f => (f.id === id ? { ...f, progress: 100, status: UploadFileStatus.success } : f)));
  };

  reader.onerror = (): void => {
    setFiles(prev =>
      prev.map(f =>
        f.id === id
          ? {
              ...f,
              status: UploadFileStatus.error,
              errorMessage: 'Ներբեռնումը ձախողվեց',
            }
          : f
      )
    );
  };

  reader.readAsArrayBuffer(file);
};

const PRESET_FILES: TUploadFile[] = [
  {
    id: 'preset-1',
    name: 'Business loan application-agreement.pdf',
    size: 135 * 1024 * 1024,
    progress: 60,
    status: UploadFileStatus.uploading,
  },
  {
    id: 'preset-2',
    name: 'Business loan application-agreement.xls',
    size: 135 * 1024 * 1024,
    progress: 45,
    status: UploadFileStatus.uploading,
  },
  {
    id: 'preset-3',
    name: 'Business loan application-agreement.doc',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.error,
    errorMessage: 'Ներբեռնումը ձախողվեց',
  },
  {
    id: 'preset-4',
    name: 'Business loan application-agreement.pdf',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
  {
    id: 'preset-5',
    name: 'Business loan application-agreement.xls',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
  {
    id: 'preset-6',
    name: 'Business loan application-agreement.pdf',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
  {
    id: 'preset-7',
    name: 'Business loan application-agreement.doc',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
  {
    id: 'preset-8',
    name: 'Business loan application-agreement.pdf',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
];

const ERROR_DEMO_FILES: TUploadFile[] = [
  {
    id: 'ok-1',
    name: 'valid-document.pdf',
    size: 1.2 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
  {
    id: 'err-1',
    name: 'too-large-video.mp4',
    size: 120 * 1024 * 1024,
    status: UploadFileStatus.error,
    errorMessage: 'Ֆայլը գերազանցում է թույլատրելի չափը',
  },
];

const getInitialFiles = (filesDemo: TUploadStoryArgs['filesDemo']): TUploadFile[] => {
  if (filesDemo === 'preset') return PRESET_FILES;
  if (filesDemo === 'error') return ERROR_DEMO_FILES;
  return [];
};

const Template: StoryFn<TUploadStoryArgs> = args => {
  const { filesDemo = 'none', ...uploadArgs } = args;
  const [files, setFiles] = useState<TUploadFile[]>(() => getInitialFiles(filesDemo));

  useEffect(() => {
    setFiles(getInitialFiles(filesDemo));
  }, [filesDemo]);

  const downloadedIds = useMemo(
    () =>
      filesDemo === 'preset'
        ? new Set<string>(['preset-4', 'preset-5', 'preset-6', 'preset-7', 'preset-8'])
        : undefined,
    [filesDemo]
  );

  const handleAdd = useCallback((nativeFiles: File[]) => {
    const enriched = nativeFiles.map(fromNativeFile);
    setFiles(prev => [...prev, ...enriched]);
    enriched.forEach(entry => {
      if (entry.file) trackFileProgress(entry.id, entry.file, setFiles);
    });
  }, []);

  const handleRemove = useCallback((file: TUploadFile) => {
    setFiles(prev => prev.filter(f => f.id !== file.id));
  }, []);

  const handleDownload = useCallback((file: TUploadFile) => {
    console.log('Download:', file.name);
  }, []);

  const handleRetry = useCallback((file: TUploadFile) => {
    setFiles(prev =>
      prev.map(f =>
        f.id === file.id
          ? {
              ...f,
              status: UploadFileStatus.uploading,
              progress: 10,
              errorMessage: undefined,
            }
          : f
      )
    );
  }, []);

  const handleError = useCallback((error: TUploadError) => {
    console.warn('Upload error:', error);
  }, []);

  return (
    <div style={{ width: 560, padding: 20 }}>
      <_Upload
        {...uploadArgs}
        files={files}
        downloadedIds={downloadedIds}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onDownload={filesDemo === 'none' ? undefined : handleDownload}
        onRetry={filesDemo === 'none' ? undefined : handleRetry}
        onError={handleError}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'uploads',
  browseText: 'Ներբեռնեք ֆայլը',
  dropZoneText: 'կամ տեղափոխեք այստեղ',
  dropZoneHint: 'JPEG, PNG, PDF, DOC և MP4 ձևաչափեր՝ մինչև 50 ՄԲ',
  buttonText: 'Կցել ֆայլ',
  downloadedLabel: 'Ներբեռնված',
  multiple: true,
  disabled: false,
  required: false,
  withDropZone: true,
  dropzoneSize: 'default',
  filesLayout: 'list',
  filesDemo: 'none',
  fileAllowedSize: 50 * 1024 * 1024,
  labelAddons: <IconInfo size="xsmall" type="information-light" className="ml-4" />,
};

const COMPOSER_PRESET_FILES: TUploadFile[] = [
  {
    id: 'composer-1',
    name: 'Business loan application-agreement.pdf',
    size: 135 * 1024 * 1024,
    progress: 60,
    status: UploadFileStatus.uploading,
  },
  {
    id: 'composer-2',
    name: 'Business loan application-agreement.doc',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
  {
    id: 'composer-3',
    name: 'Business loan application-agreement.xls',
    size: 135 * 1024 * 1024,
    status: UploadFileStatus.success,
  },
];

export const ChatComposer = (): JSX.Element => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<TUploadFile[]>(COMPOSER_PRESET_FILES);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const downloadedIds = useMemo(() => new Set<string>(['composer-2', 'composer-3']), []);

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const handleFilesChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const enriched = Array.from(event.target.files).map(fromNativeFile);
    setFiles(prev => [...prev, ...enriched]);
    enriched.forEach(entry => {
      if (entry.file) trackFileProgress(entry.id, entry.file, setFiles);
    });
    event.target.value = '';
  }, []);

  const handleRemove = useCallback((file: TUploadFile) => {
    setFiles(prev => prev.filter(f => f.id !== file.id));
  }, []);

  const handleSend = useCallback(() => {
    if (!message.trim() && files.length === 0) return;
    setMessage('');
    setFiles([]);
  }, [message, files.length]);

  const canSend = message.trim().length > 0 || files.length > 0;

  return (
    <div style={{ width: 900, padding: 20 }}>
      <h4 style={{ margin: '0 0 16px', fontWeight: 700 }}>Default position</h4>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1 }}>
          <Input
            size="large"
            placeholder="Թողեք մեկնաբանություն հայտի վերաբերյալ"
            currentValue={message}
            handleChange={(_, value) => setMessage(value)}
          />
        </div>

        <ButtonIcon
          size="medium"
          aria-label="Կցել ֆայլ"
          iconProps={{ Component: IconAttach, type: 'tertiary' }}
          onClick={openFileDialog}
        />

        <Button
          type="primary"
          size="medium"
          disabled={!canSend}
          iconProps={{ Component: IconSend, type: 'primary' }}
          aria-label="Ուղարկել"
          onClick={handleSend}
        />

        <input ref={fileInputRef} type="file" multiple style={{ display: 'none' }} onChange={handleFilesChange} />
      </div>

      {files.length > 0 ? (
        <div style={{ marginTop: 12 }}>
          <ScrollableCarousel prevAriaLabel="Նախորդ" nextAriaLabel="Հաջորդ">
            {files.map(file => (
              <AttachmentCard
                key={file.id}
                file={file}
                downloaded={downloadedIds.has(file.id)}
                onRemove={handleRemove}
              />
            ))}
          </ScrollableCarousel>
        </div>
      ) : null}
    </div>
  );
};
