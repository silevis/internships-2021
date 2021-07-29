import React, { useEffect, useRef, useState } from 'react';
// To jest nasze rozwiazanie - Cezary Bula 2021
// eslint-disable-next-line
import FileType from 'file-type';
import { toast } from 'react-toastify';
import supabase from '../utils/supabase';
import { getUserAvatarURL, useUser } from './UserContext';
import Avatar from './Avatar';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';

const EditUserComponent = () => {
  const usr: IBasicUserInfo | null = useUser();
  const [fileInput] = useState(useRef<HTMLInputElement>(null));
  const [avatarLink, setAvatarLink] = useState('');

  useEffect(() => {
    (async () => {
      await getUserAvatarURL().then((data) => {
        if (data?.signedURL) {
          setAvatarLink(data?.signedURL);
        }
      });
    })();
  }, [avatarLink]);

  const upload = async (f: File | undefined) => {
    if (f === undefined) {
      toast.error('File not found', {
        toastId: 'file-not-found',
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }
    if (!usr || !usr.id) {
      toast.error('Unknown user', {
        toastId: 'unknown-user',
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }
    // type checking
    const type = await FileType.fromBuffer(await f.arrayBuffer());
    if (type?.mime !== 'image/jpeg' && type?.mime !== 'image/png') {
      toast.error('Invalid file type. Supported types: jpg, png.', {
        toastId: 'invalid-file-type',
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      return;
    }

    toast.info('Uploading...', {
      toastId: 'uploading',
      position: 'top-right',
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
    await supabase
      .storage.from('images')
      .remove([`avatars/${usr?.id}`]);

    supabase
      .storage.from('images/avatars')
      .upload(`${usr?.id}`, f)
      .then(async (data) => {
        if (data.error !== null) {
          throw data.error;
        }
        toast.success('Upload successful', {
          toastId: 'upload-success',
          position: 'top-right',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        const avatarUrl = await getUserAvatarURL();
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#other_types
        if (avatarUrl?.signedURL) {
          setAvatarLink(avatarUrl?.signedURL);
        }
      }).catch((error) => {
        toast.error(`Upload error (${JSON.stringify(error)})`, {
          toastId: 'upload-error',
          position: 'top-right',
          autoClose: 6000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  };

  const onUploadButtonClickHandler = () => {
    if (fileInput?.current?.files && fileInput?.current?.files.length > 0) {
      upload(fileInput?.current?.files[0]);
    } else {
      toast.warn('File not selected', {
        toastId: 'file-not-selected',
        position: 'top-right',
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Zmiana zdjęcia użytkownika</h1>
      <div className="flex flex-wrap">
        <Avatar url={avatarLink} className="" />
        <div className="flex flex-col flex-wrap place-content-end m-2">
          <input type="file" accept="image/jpeg, image/png" ref={fileInput} required />
          <div className="mt-4">
            <button type="button" onClick={onUploadButtonClickHandler}>Upload file</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserComponent;
