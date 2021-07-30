import { FC } from 'react';
import ChangeAvatarComponent from './ChangeAvatarComponent';

interface IEditUserComponentProps {
  onAvatarChange: () => void;
}

const EditUserComponent: FC<IEditUserComponentProps> = ({ onAvatarChange }) => {
    return (
      <div className="m-4">
        <ChangeAvatarComponent onAvatarChange={onAvatarChange} />
      </div>
    );
};

export default EditUserComponent;
