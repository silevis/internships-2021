import { motion, useAnimation } from 'framer-motion';
import React, { FC, useEffect } from 'react';

interface ITooltipProps {
  visible: boolean,
  content: string,
}

const Tooltip: FC<ITooltipProps> = ({ visible, content }) => {
  const controls = useAnimation();
  const motionVariants = {
    visible: {
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 1,
      transition: {
        duration: 0.25,
      },
    },
  };

  useEffect(() => {
    controls.start(visible ? 'visible' : 'hidden');
  }, [visible, controls]);

  return (
    <motion.div
      variants={motionVariants}
      animate={controls}
      className="block relative top-2 left-8 text-sm"
    >
      <motion.span className="w-max p-1 shadow absolute bg-white rounded-sm">
        { content }
      </motion.span>
    </motion.div>
  );
};

export default Tooltip;
