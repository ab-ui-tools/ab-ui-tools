import React from 'react';

import { Loader } from '../../../helperComponents';

export const LoadingIndicator = () => {
  return (
    <div className="pr-8">
      <Loader size="medium" type="dark" />
    </div>
  );
};
