import type { StoryFn } from '@storybook/react';
import type { TFileUploadProps } from '@ab.uitools/ui-library/dist/components/FileUpload';

// @ts-nocheck
import React, { useState } from 'react';
import IconInfo from '@ab.uitools/ui-library/dist/components/SVGIcons/IconInfo';
import { FileUpload as _FileUpload } from '@ab.uitools/ui-library/dist/components/FileUpload';

export default {
  title: 'FileUpload',
  component: _FileUpload,
};

const getFiles = (files: FileList) => {
  console.log('getFiles', files);
};

const Template: StoryFn<TFileUploadProps> = args => {
  const [files, setFiles] = useState([]);
  // @ts-ignore
  const getFiles = _files => {
    if (_files && _files.length) {
      setFiles(_files);
    }
  };
  return (
    <div style={{ width: 400 }}>
      <_FileUpload
        {...args}
        getFiles={getFiles}
        fileAllowedSize={9000000}
        uploadedFiles={files}
        onError={type => console.log('type', type)}
      />
    </div>
  );
};
export const FileUpload = Template.bind({});

FileUpload.args = {
  label: 'Label',
  buttonText: 'Attach file',
  isFileUploaded: false,
  labelAddons: <IconInfo size={'xsmall'} type={'information'} className={'ml-4'} />,
};
