import React, { FC } from 'react';

interface IModalDialogProps {
  title: string;
  okButtonLabel: string;
  onVisibilityChange: () => void;
  onOkButtonClick: () => void;
}

const ModalDialog: FC<IModalDialogProps> = ({ title, okButtonLabel, onVisibilityChange, onOkButtonClick, children }) => {
  return (
    <div className="fixed left-0 top-0 pin z-50 overflow-auto bg-gray-400 bg-opacity-50 flex h-screen w-screen">
      <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-md shadow-xl">
        <div className="flex justify-between">
          <h1 className="font-bold">{title}</h1>
          <button type="button" onClick={() => onVisibilityChange()} className="btn-exit">
            X
          </button>
        </div>
        <div>
          {children}
        </div>
        <button type="submit" className="btn-page mt-3" onClick={() => onOkButtonClick()}>
          {okButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default ModalDialog;
