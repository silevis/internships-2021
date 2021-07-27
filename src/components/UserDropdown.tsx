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
    <div>
      <div
        className="btn-nav-end"
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      {open && (
        <div
          className="dropdown block md:absolute w-auto overflow-hidden md:-translate-y-0
        bg-gray-700 md:bg-gray-600 text-white border border-t-0 border-gray-400 md:border-gray-800 rounded-sm shadow-inner md:shadow-none"
        >
          {items.map((item) => (
            <div className="menu-item border-b border-gray-400 md:border-gray-700">
              <Link
                to={`${item.link}`}
                className="cursor-pointer transition duration-400 ease-in-out hover:text-indigo-500"
              >
                {item.label}
              </Link>
            </div>
          ))}

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
