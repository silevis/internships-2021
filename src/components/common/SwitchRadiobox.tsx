import React, { FC, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ISwitchRadioboxProps {
    onSwitch: () => void;
    initialState: boolean;
}

const SwitchRadiobox: FC<ISwitchRadioboxProps> = ({ onSwitch, initialState }) => {
  const [isToggled, setIsToggled] = useState(initialState);
  const controls = useAnimation();
  const motionVariants = {
    disabled: {
      backgroundColor: '#ffffff',
    },
    enabled: {
      backgroundColor: '#123456',
    },
  };

  const onSwitchChange = () => {
    setIsToggled(!isToggled);
    onSwitch();
  };

  useEffect(() => {
    controls.start(isToggled ? 'enabled' : 'disabled');
  }, [isToggled, controls]);

  return (
    <div>
      <motion.div
        onClick={onSwitchChange}
        className={`p-2 flex items-center ${isToggled ? 'justify-start' : 'justify-end'}
      rounded-full bg-white cursor-pointer transition`}
        style={isToggled ? {
          backgroundColor: '#ffffff',
        } : {
          backgroundColor: '#29b6f6',
        }}
      >
        <motion.div
          variants={motionVariants}
          animate={controls}
          className="h-4 w-4 rounded-full"
          layout
        />
      </motion.div>
    </div>
  );
};

export default SwitchRadiobox;
