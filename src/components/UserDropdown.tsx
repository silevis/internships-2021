import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  link: string;
  label: string;
}

interface UserDropdownProps {
  title: string | undefined;
  items: DropdownItem[];
  logOut: () => void;
}

const UserDropdown: FC<UserDropdownProps> = ({ title, items, logOut }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative btn-nav-end">
      <button
        type="button"
        className="navbar-nav text-left relative"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>

      {open && (
        <>
          <div
            className="hidden md:flex md:fixed left-0 top-0 pin z-40 overflow-auto bg-white bg-opacity-0 h-screen w-screen"
            onClick={() => setOpen(!open)}
          >
            &nbsp;
          </div>
          <div
            className="dropdown block md:absolute top-0 left-0 w-auto overflow-hidden md:-translate-y-0 z-50 bg-gray-700
          md:bg-gray-600 text-white border-none md:border border-gray-400 md:border-gray-800 rounded-sm"
          >
            {items.map((item) => (
              <div className="menu-item border-b border-gray-400 md:border-gray-700">
                <button type="button">
                  <Link
                    to={`${item.link}`}
                    className="cursor-pointer transition duration-400 ease-in-out hover:text-indigo-500"
                  >
                    {item.label}
                  </Link>
                </button>
              </div>
            ))}

            <div className="menu-item">
              <button
                type="button"
                onClick={logOut}
                className="cursor-pointer transition duration-400 ease-in-out hover:text-indigo-500"
              >
                Logout
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default UserDropdown;
