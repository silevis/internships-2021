import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface UserDropdownProps {
  title: string | undefined;
  logOut: () => void;
}

const UserDropdown: FC<UserDropdownProps> = ({ title, logOut }) => {
  const [Open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="nav-item my-1 px-4 pb-1 md:pb-0 text-gray-200 transition duration-400 ease-in-out hover:text-indigo-500
        md:mr-4 md:my-0 border-b md:border-b-0 md:border-l md:border-r border-gray-400 cursor-pointer"
        onClick={() => setOpen(!Open)}
      >
        {title}
      </div>
      {Open && (
        <div
          className="dropdown block md:absolute w-auto overflow-hidden md:-translate-y-0
        bg-gray-600 text-white border border-gray-800 rounded-sm"
        >
          <div className="menu-item border-b border-gray-700">
            <Link
              to="/user"
              className="cursor-pointer bg-gray-600 transition duration-400 ease-in-out hover:text-indigo-500"
            >
              User Profile
            </Link>
          </div>
          <div className="menu-item border-b border-gray-700">
            <Link
              to="/books-list"
              className="cursor-pointer transition duration-400 ease-in-out hover:text-indigo-500"
            >
              User Books
            </Link>
          </div>
          <div className="menu-item">
            <div
              onClick={logOut}
              className="cursor-pointer transition duration-400 ease-in-out hover:text-indigo-500"
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
