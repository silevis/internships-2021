import { motion } from 'framer-motion';
import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Footer = () => {
  return (
    <div className="w-full mt-4 p-2 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.span className="dark:text-white transition mb-2">Dark mode</motion.span>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Footer;
