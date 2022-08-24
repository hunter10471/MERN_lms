import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <div className='p-10'>
      <div className='relative '>
        <SearchIcon className='absolute left-4 top-[20%] text-neutral-500' />
        <input
          type='search'
          placeholder='Search'
          className='min-w-[300px] border-2 border-transparent transition-all hover:border-primary focus:border-primary  focus:outline-none pl-12 pr-4 py-2 bg-neutral-100 rounded-full'
        />
      </div>
    </div>
  );
};

export default Topbar;
