import { FC } from 'react';
import ChangeAvatarComponent from './ChangeAvatarComponent';
import DeleteUserComponent from './DeleteUserComponent';

interface IEditUserComponentProps {
  onAvatarChange: () => void;
}

const EditUserComponent: FC<IEditUserComponentProps> = ({ onAvatarChange }) => {
    return (
      <div className="m-4">
        <ChangeAvatarComponent onAvatarChange={onAvatarChange} />
        <DeleteUserComponent />
      </div>
    );
};

export default EditUserComponent;
