import React from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Logo = () => {
  return (
    <div className='flex gap-2 items-center '>
      <AutoStoriesIcon sx={{ fontSize: '30px' }} className='text-cyan-500' />
      <h1 className='font-heading font-extrabold text-3xl text-secondary'>
        Edunix
      </h1>
    </div>
  );
};

export default Logo;
