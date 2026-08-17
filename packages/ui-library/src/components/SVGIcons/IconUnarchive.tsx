import type { ReactElement } from 'react';

import classNames from 'classnames';

import type { ISVGIconProps } from './types';

export const IconUnarchive = ({
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19.6927 3.08292C20.0127 2.76566 20.5083 2.78734 20.8001 3.13077C21.092 3.4743 21.0692 4.0095 20.7493 4.32706L4.33429 20.6171C4.01436 20.9346 3.51877 20.9136 3.22687 20.5702C2.93499 20.2267 2.95766 19.6905 3.27765 19.373L19.6927 3.08292ZM20.2923 6.98038C20.2923 7.73898 19.9106 8.40719 19.3314 8.79972V17.1913C19.3314 19.2055 17.7184 20.8388 15.7288 20.8388H7.56378C6.96974 20.8388 6.40931 20.6923 5.91534 20.4345L7.04327 19.3134C7.21008 19.3552 7.38422 19.3798 7.56378 19.3798H15.7288C16.9226 19.3798 17.8909 18.3998 17.8909 17.1913V9.16886H17.2474L20.2923 6.14151V6.98038ZM16.4398 4.7919H5.16241C4.7647 4.79199 4.44192 5.1188 4.44171 5.5214V6.98038C4.44175 7.38312 4.7646 7.70979 5.16241 7.70987H13.5042L12.0364 9.16886H5.40265V15.7646L3.96124 17.1972V8.79972C3.38219 8.40716 3.00033 7.73887 3.00031 6.98038V5.5214C3.00051 4.31314 3.96888 3.333 5.16241 3.33292H17.9066L16.4398 4.7919ZM9.25323 11.9355C9.24942 11.9051 9.24445 11.8741 9.24445 11.8427C9.24467 11.4401 9.56748 11.1133 9.96515 11.1132H10.0814L9.25323 11.9355Z"
      fill="#222222"
    />
  </svg>
);

export default IconUnarchive;
