import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconTextBulletListSquarePerson = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className,
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M19.1996 10.3957V6.0001C19.1996 5.33736 18.6624 4.8001 17.9996 4.8001H5.99961C5.33687 4.8001 4.79961 5.33736 4.79961 6.0001V18.0001C4.79961 18.6628 5.33687 19.2001 5.99961 19.2001H12.0032C12.0309 19.6132 12.1201 20.0246 12.2364 20.4001H5.99961C4.67413 20.4001 3.59961 19.3256 3.59961 18.0001V6.0001C3.59961 4.67461 4.67413 3.6001 5.99961 3.6001H17.9996C19.3251 3.6001 20.3996 4.67461 20.3996 6.0001V11.1066C20.2158 10.9431 20.0148 10.7997 19.7996 10.6801C19.5996 10.5601 19.3996 10.4668 19.1996 10.3957ZM8.09961 9.6001C8.59667 9.6001 8.99961 9.19715 8.99961 8.7001C8.99961 8.20304 8.59667 7.8001 8.09961 7.8001C7.60255 7.8001 7.19961 8.20304 7.19961 8.7001C7.19961 9.19715 7.60255 9.6001 8.09961 9.6001ZM8.99961 12.3001C8.99961 12.7972 8.59667 13.2001 8.09961 13.2001C7.60255 13.2001 7.19961 12.7972 7.19961 12.3001C7.19961 11.803 7.60255 11.4001 8.09961 11.4001C8.59667 11.4001 8.99961 11.803 8.99961 12.3001ZM8.99961 15.9001C8.99961 16.3972 8.59667 16.8001 8.09961 16.8001C7.60255 16.8001 7.19961 16.3972 7.19961 15.9001C7.19961 15.403 7.60255 15.0001 8.09961 15.0001C8.59667 15.0001 8.99961 15.403 8.99961 15.9001ZM10.7996 9.0001C10.7996 8.66873 11.0682 8.4001 11.3996 8.4001H16.1996C16.531 8.4001 16.7996 8.66873 16.7996 9.0001C16.7996 9.33147 16.531 9.6001 16.1996 9.6001H11.3996C11.0682 9.6001 10.7996 9.33147 10.7996 9.0001ZM10.7996 12.6001C10.7996 12.2687 11.0682 12.0001 11.3996 12.0001H14.8569C14.6549 12.3623 14.5138 12.7664 14.4458 13.2001H11.3996C11.0682 13.2001 10.7996 12.9315 10.7996 12.6001ZM15.3596 16.2001C15.18 16.0205 15.0219 15.8195 14.8886 15.6001H11.3996C11.0682 15.6001 10.7996 15.8687 10.7996 16.2001C10.7996 16.5315 11.0682 16.8001 11.3996 16.8001H12.9875C13.4844 16.4118 14.122 16.2001 14.7596 16.2001H15.3596ZM19.1996 11.7212C18.8466 11.517 18.4368 11.4001 17.9996 11.4001C16.6741 11.4001 15.5996 12.4746 15.5996 13.8001C15.5996 15.1256 16.6741 16.2001 17.9996 16.2001C18.4368 16.2001 18.8466 16.0832 19.1996 15.879C19.917 15.464 20.3996 14.6884 20.3996 13.8001C20.3996 12.9118 19.917 12.1361 19.1996 11.7212ZM13.1996 18.9001C13.1996 18.0717 13.8712 17.4001 14.6996 17.4001H21.2996C22.128 17.4001 22.7996 18.0717 22.7996 18.9001C22.7996 18.9352 22.7999 18.9704 22.8003 19.0056C22.8011 19.091 22.8019 19.1766 22.7979 19.2618C22.7964 19.2936 22.7936 19.3365 22.7884 19.3887C22.778 19.493 22.7577 19.6361 22.7183 19.8052C22.6397 20.1422 22.4824 20.5924 22.1661 21.0442C21.5111 21.98 20.2622 22.8001 17.9996 22.8001C16.0662 22.8001 14.8729 22.2012 14.1579 21.443C14.0362 21.314 13.9284 21.1803 13.8331 21.0442C13.6607 20.7979 13.5355 20.5521 13.4446 20.3248C13.3687 20.1352 13.3167 19.9585 13.2809 19.8052C13.2415 19.6361 13.2212 19.493 13.2108 19.3887C13.2056 19.3365 13.2028 19.2936 13.2013 19.2618C13.1996 19.1041 13.1996 19.0153 13.1996 18.9035V18.9001Z"
      fill="#222222"
    />
  </svg>
);

export default IconTextBulletListSquarePerson;
