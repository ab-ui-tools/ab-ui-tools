import type { JSX } from 'react';

import React from 'react';

import type { IUploadItemPropTypes } from './types';

import { Text } from '../Text';
import IconDelete from '../SVGIcons/IconDelete';
import { Button } from '../Button';
import { openFileInNewWindow } from '../../utils/helpers';
import { useFormProps } from '../../hooks';
import { ErrorMessage } from '../../helperComponents';

export const UploadItems = (props: IUploadItemPropTypes): JSX.Element => {
  const { files, onRemove, withFilePreview, handleFileClick } = props;
  const { errors } = useFormProps();
  const filesErrors = errors && errors.files && errors.files.length > 0;

  return (
    <>
      {files.map((file, index) => {
        return (
          <div
            className={`upload-item mt-4 ${filesErrors && errors.files[index]?.message ? 'upload-item--error' : ''}`}
            key={index}
          >
            <div className="upload-item__inner">
              <div className="upload-item__content">
                <div className="upload-item__content__inner pr-8">
                  <Text
                    size="small"
                    lineHeight="medium"
                    className="upload-item__text"
                    onClick={e =>
                      withFilePreview &&
                      openFileInNewWindow({
                        e,
                        file,
                        handleFileClick,
                      })
                    }
                  >
                    {file.name}
                  </Text>
                  {filesErrors && <ErrorMessage message={errors.files[index]?.message} />}
                </div>
                <Button
                  type="tertiary"
                  size="small"
                  iconProps={{ Component: IconDelete }}
                  onClick={() => {
                    onRemove(file, index);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
