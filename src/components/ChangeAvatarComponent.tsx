import React, { useEffect, useRef, useState } from 'react';
// To jest nasze rozwiazanie - Cezary Bula 2021
// eslint-disable-next-line
import FileType from 'file-type';
import supabase from '../utils/supabase';
import { getUserAvatarURL, useUser } from './UserContext';
import Avatar from './Avatar';
import { IBasicUserInfo } from '../interfaces/IBasicUserInfo.interface';
import { errorToast, infoToast, successToast, warningToast } from '../utils/utils';

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
      errorToast('File not found', 'file-not-found');
      return;
    }
    if (!usr || !usr.id) {
      errorToast('Unknown user', 'unknown-user');
      return;
    }
    // type checking
    const type = await FileType.fromBuffer(await f.arrayBuffer());
    if (type?.mime !== 'image/jpeg' && type?.mime !== 'image/png') {
      errorToast('Invalid file type. Supported types: jpg, png.', 'invalid-file-type');
      return;
    }
    infoToast('Uploading...', 'uploading');
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
        successToast('Upload successful', 'upload-success');
        const avatarUrl = await getUserAvatarURL();
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#other_types
        if (avatarUrl?.signedURL) {
          setAvatarLink(avatarUrl?.signedURL);
        }
      }).catch((error) => {
        errorToast(`Upload error (${JSON.stringify(error)})`, 'upload-error');
      });
  };

  const onUploadButtonClickHandler = () => {
    if (fileInput?.current?.files && fileInput?.current?.files.length > 0) {
      upload(fileInput?.current?.files[0]);
    } else {
      warningToast('File not selected', 'file-not-selected');
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
