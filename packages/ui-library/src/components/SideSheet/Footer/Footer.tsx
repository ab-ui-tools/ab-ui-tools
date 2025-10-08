import type { ReactElement } from 'react';

import React, { useCallback } from 'react';

import type { TCheckboxInfo } from '../types';
import type { TButtonPropTypes } from '../../Button/types';

import { Checkbox } from '../../Checkbox';
import { Button } from '../../Button';

type TProps = {
  isLoading?: boolean;
  footerButtons?: {
    cancel: TButtonPropTypes;
    confirm: TButtonPropTypes;
    extraButton?: TButtonPropTypes;
  };
  onClose: (e?: TClickEventType) => void;
  onSubmit?: (isSelected: boolean) => void;
  checkboxInfo?: TCheckboxInfo;
};
export const Footer = ({ isLoading, footerButtons, onClose, onSubmit, checkboxInfo }: TProps): ReactElement | null => {
  const [isSelected, setIsSelected] = React.useState(checkboxInfo?.isChecked || false);

  const handleSubmit = useCallback(() => {
    onSubmit?.(isSelected);
  }, [onSubmit, isSelected]);

  if (!footerButtons) {
    return null;
  }

  const { extraButton, confirm, cancel } = footerButtons;
  return (
    <div className="side-sheet__footer">
      {checkboxInfo ? <Checkbox label={checkboxInfo.label} selectedValue={isSelected} onClick={setIsSelected} /> : null}

      <div className="side-sheet__footer__buttons">
        {extraButton ? <Button type="secondary" {...footerButtons.extraButton} /> : null}
        {cancel ? <Button type="secondary" onClick={onClose} {...cancel} /> : null}
        {confirm ? <Button onClick={handleSubmit} disabled={isLoading} {...confirm} /> : null}
      </div>
    </div>
  );
};
