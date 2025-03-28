import type { TFileUploadProps } from 'ab-ui-library/components/FileUpload';
import type { StoryFn } from '@storybook/react';

// @ts-nocheck
import React, { useState } from 'react';
import IconInfo from 'ab-ui-library/components/SVGIcons/IconInfo';
import { FileUpload as _FileUpload } from 'ab-ui-library/components/FileUpload';

export default {
  title: 'FileUpload',
  component: _FileUpload,
};

const getFiles = (files: FileList) => {
  console.log('getFiles', files);
};

const Template: StoryFn<TFileUploadProps> = args => {
  const [files, setFiles] = useState([]);
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
