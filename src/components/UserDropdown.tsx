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
        className="btn-nav-end"
        onClick={() => setOpen(!Open)}
      >
        {title}
      </div>
      {Open && (
        <div
          className="dropdown block md:absolute w-auto overflow-hidden md:-translate-y-0
        bg-gray-700 md:bg-gray-600 text-white border border-t-0 border-gray-400 md:border-gray-800 rounded-sm shadow-inner md:shadow-none"
        >
          <div className="menu-item border-b border-gray-400 md:border-gray-700">
            <Link
              to="/user"
              className="cursor-pointer transition duration-400 ease-in-out hover:text-indigo-500"
            >
              User Profile
            </Link>
          </div>
          <div className="menu-item border-b border-gray-400 md:border-gray-700">
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
