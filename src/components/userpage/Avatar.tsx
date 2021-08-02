import React, { FC } from 'react';

interface IAvatarProps {
    url: string
    className: string
}

const Avatar: FC<IAvatarProps> = ({ url, className }) => {
    return (
      <img
        className={`w-32 h-32 rounded-full object-cover ${className}`}
        src={url}
        alt="User avatar"
      />
    );
};

export default Avatar;
