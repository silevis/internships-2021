import React, { useRef, useState } from 'react';
import FileType from 'file-type';
import { IProfile } from '../interfaces/IProfile.interface';
import supabase from '../utils/supabase';
import { useUser } from './UserContext';

const EditUserComponent = () => {
    const usr: IProfile | null = useUser();
    const [fileInput] = useState(useRef<HTMLInputElement>(null));
    const [status, setStatus] = useState<string>();
    // eslint-disable-next-line max-len
    const [avatarLink] = useState('https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg');

    async function upload(f: File | undefined) {
        console.log(f);
        if (f === undefined) {
            setStatus('File not found.');
            return;
        }
        const type = await FileType.fromBuffer(await f.arrayBuffer());

        if (type?.mime !== 'image/jpeg' && type?.mime !== 'image/png') {
            setStatus('Invalid file type. Supported types: jpg, png.');
            return;
        }
        setStatus('Uploading...');

        supabase
            .storage.from('images')
            .upload(`${usr?.id}--${f.name}`, f)
            .then((data) => {
                if (data.error !== null) {
                    throw data.error;
                }
                setStatus('Upload successful.');
            }).catch((error) => {
                setStatus('Upload error');
                console.log('Upload error: ', error);
            });
    }

    function onUploadButtonClickHandler() {
        if (fileInput?.current?.files !== null) {
            upload(fileInput?.current?.files[0]);
        } else {
            setStatus('File not selected.');
        }
    }

    return (
      <div className="m-4">
        <h1 className="text-2xl">Zmiana zdjęcia użytkownika</h1>
        <div className="flex flex-wrap">
          <img className="w-32 h-32" src={avatarLink} alt="Zdjęcie użytkownika" />
          <div className="flex flex-col flex-wrap place-content-end m-2">
            <input
              type="file"
              accept="image/jpeg, image/png"
              ref={fileInput}
              required
              onChange={(e) => {
                setStatus('');
                if (e?.target?.files !== null) {
                    upload(e?.target?.files[0]);
                }
            }}
            />
            <div className="mt-4">
              <button type="button" onClick={onUploadButtonClickHandler}>Upload file</button>
              <div className="text-xs h-4"><label className="text-gray-500">Status: </label>{status}</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EditUserComponent;
