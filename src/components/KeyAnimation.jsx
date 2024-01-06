import React from 'react';
import { motion } from 'framer-motion';
import imagenes from '../assets/imagenes';

const KeyAnimation = () => {
  return (
    <div className='motion'>
      <motion.img
        src={imagenes.key}
        initial={{ x: '-250%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 1.3 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      </motion.img>
      <motion.img
        src={imagenes.house3d}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >        
      </motion.img>
    </div>
  );
};

export default KeyAnimation;



