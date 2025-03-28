import type { ReactElement } from 'react';

import React from 'react';
import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconLoan = ({
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
      d="M15.2638 12.9565C15.545 12.6628 15.5438 12.1879 15.2611 11.8958C14.9783 11.6037 14.5211 11.605 14.2399 11.8986L9.07478 17.2924C8.79355 17.5861 8.79478 18.0609 9.07753 18.353C9.36028 18.6452 9.81747 18.6439 10.0987 18.3502L15.2638 12.9565Z"
      fill="#555555"
    />
    <path
      d="M14.3651 15.9385C13.6795 15.9385 13.1236 16.5158 13.1236 17.228C13.1236 17.9402 13.6795 18.5175 14.3651 18.5175C15.0507 18.5175 15.6066 17.9402 15.6066 17.228C15.6066 16.5159 15.0508 15.9385 14.3651 15.9385Z"
      fill="#555555"
    />
    <path
      d="M8.90202 13.0277C8.90202 12.315 9.45833 11.7371 10.1446 11.7371C10.8308 11.7371 11.3871 12.315 11.3871 13.0277C11.3871 13.7405 10.8308 14.3183 10.1446 14.3183C9.45835 14.3183 8.90202 13.7405 8.90202 13.0277Z"
      fill="#555555"
    />
    <path
      d="M16.175 3.91504C16.4512 2.62404 15.1615 1.57811 14.0227 2.16955L13.4506 2.46663C12.6245 2.89567 11.6778 3.00361 10.7818 2.77093C9.38552 2.40837 8.13487 3.7514 8.53025 5.18874L8.6101 5.47903H7.61859C6.5221 5.47903 5.63322 6.40228 5.63322 7.54116C5.63322 8.56709 6.35452 9.41803 7.29912 9.57674L4.92495 13.938C2.9146 17.631 5.65191 22.0005 9.74625 22.0005H14.7537C18.8481 22.0005 21.5854 17.631 19.5751 13.938L17.201 9.57694C18.1462 9.41874 18.8681 8.56752 18.8681 7.54116C18.8681 6.40228 17.9792 5.47903 16.8827 5.47903H15.8404L16.175 3.91504ZM6.18207 14.6763L8.94369 9.6033H15.5563L18.3179 14.6763C19.7242 17.2595 17.8659 20.5005 14.7537 20.5005H9.74625C6.63412 20.5005 4.77583 17.2595 6.18207 14.6763ZM14.361 5.47903L14.7652 3.58964C14.7701 3.56691 14.7669 3.55623 14.7648 3.55048C14.7615 3.54163 14.7541 3.52952 14.7407 3.51869C14.7274 3.50786 14.7143 3.50328 14.7052 3.50213C14.6993 3.50139 14.6886 3.50078 14.6685 3.51119L14.0965 3.80827C12.962 4.39745 11.662 4.54567 10.4315 4.22614C10.1136 4.14359 9.82881 4.44939 9.91884 4.77666L10.112 5.47903H14.361ZM7.07738 7.54116C7.07738 7.23071 7.31969 6.97903 7.61859 6.97903H16.8827C17.1816 6.97903 17.4239 7.23071 17.4239 7.54116C17.4239 7.85162 17.1816 8.1033 16.8827 8.1033H7.61859C7.31969 8.1033 7.07738 7.85162 7.07738 7.54116Z"
      fill="#555555"
    />
  </svg>
);

export default IconLoan;
