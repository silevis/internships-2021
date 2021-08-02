import React, { useState } from 'react';
import ModalDialog from '../universal/ModalDialog';
import { IProfile } from '../../interfaces/IProfile.interface';
import supabase from '../../utils/supabase';
import { errorToast, successToast } from '../../utils/utils';

const DeleteUserComponent = () => {
  const [modalShown, setModalShown] = useState(false);

  const deleteAccHandler = async () => {
    const { error } = await supabase
      .from<IProfile>('profiles')
      .update({ status: 'DELETED' })
      .match({ id: supabase.auth.user()?.id });
    if (error) {
      errorToast(error.message, 'delete-account-fail');
    } else {
      supabase.auth.signOut();
      successToast('Account deleted successfully', 'logout-success');
      setModalShown(false);
    }
  };

  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={() => setModalShown(!modalShown)}
        className="text-red-300 border-red-300 rounded-sm border-2 max-h-full p-1
        transition duration-300 ease-in-out
        hover:bg-red-300 hover:text-white"
      >
        Delete an account
      </button>
      {modalShown && (
        <ModalDialog
          title="Do you want to delete your account?"
          okButtonLabel="Delete"
          onOkButtonClick={() => deleteAccHandler()}
          onVisibilityChange={() => setModalShown(!modalShown)}
        />
      )}

    </div>

  );
};

export default DeleteUserComponent;
