import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from '../types';

export const FlagNewZealand = ({
  size,
  className = '',
  onClick,
  refHandler,
  id,
  dataId,
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', 'svg-flag', {
      [`svg-icon__size-${size}`]: size,
      [className]: className,
    })}
    viewBox="0 0 20 20"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-id={dataId ? `${dataId}-svg-flag` : ''}
  >
    <g clipPath="url(#clip0_9419_665)">
      <path
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47719 20 0 15.5228 0 10C0 10.0024 10 0.00109375 10 0C15.5228 0 20 4.47719 20 10Z"
        style={{ fill: '#0052B4' }}
      />
      <path
        d="M9.97327 10H10C10 9.99104 10 9.98229 10 9.97327C9.99112 9.98221 9.98221 9.99112 9.97327 10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M10 5.21738C10 3.45781 10 2.30488 10 0H9.99832C4.47625 0.0009375 0 4.4777 0 10H5.21738V7.06207L8.15535 10H9.97328C9.98219 9.99109 9.99113 9.98219 10 9.97324C10 9.29953 10 8.6984 10 8.15539L7.06203 5.21738H10Z"
        style={{ fill: '#F0F0F0' }}
      />
      <path
        d="M5.05917 1.30432C3.49514 2.19491 2.19491 3.49514 1.30432 5.05917V9.99999H3.91303V3.91311V3.91303H9.99999C9.99999 3.09026 9.99999 2.30643 9.99999 1.30432H5.05917Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M9.99999 8.77026L6.44713 5.21741C6.44713 5.21741 5.21741 5.21749 5.21741 5.21741V5.21749L9.99995 9.99999H9.99999C9.99999 9.99999 9.99999 9.15206 9.99999 8.77026Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M17.3176 7.42029L17.5334 8.08458H18.2319L17.6668 8.49513L17.8827 9.15939L17.3176 8.74888L16.7525 9.15939L16.9683 8.49513L16.4032 8.08458H17.1017L17.3176 7.42029Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M14.8207 12.2028L15.1445 13.1993H16.1922L15.3445 13.8151L15.6684 14.8115L14.8207 14.1957L13.973 14.8115L14.2969 13.8151L13.4492 13.1993H14.4969L14.8207 12.2028Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M14.9151 4.37677L15.1849 5.2072H16.058L15.3516 5.72029L15.6214 6.55068L14.9151 6.03743L14.2087 6.55068L14.4785 5.72029L13.7722 5.2072H14.6453L14.9151 4.37677Z"
        style={{ fill: '#D80027' }}
      />
      <path
        d="M12.5126 7.3913L12.8363 8.38778H13.8841L13.0364 9.00356L13.3603 10L12.5126 9.38419L11.6649 10L11.9888 9.00356L11.1411 8.38778H12.1888L12.5126 7.3913Z"
        style={{ fill: '#D80027' }}
      />
    </g>
    <defs>
      <clipPath id="clip0_9419_665">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default FlagNewZealand;
