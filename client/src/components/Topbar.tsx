import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';

const Topbar = () => {
  return (
    <div className='p-10 w-full text-secondary'>
      <div className='relative flex justify-between items-center'>
        <SearchIcon className='absolute left-4 top-[20%] text-neutral-500' />
        <input
          type='search'
          title='search'
          placeholder='Search'
          className='min-w-[300px] border-2 border-transparent transition-all hover:border-primary focus:border-primary  focus:outline-none pl-12 pr-4 py-2 bg-neutral-100 rounded-full'
        />
        <div className='flex items-center gap-8'>
          <span
            title='notifications'
            className='relative p-2 rounded-full shadow-lg cursor-pointer transition-all duration-300'
          >
            <NotificationsNoneIcon />
            <span className='absolute top-[-5px] left-[-5px] font-medium h-[20px] w-[20px] bg-primary text-white rounded-full text-xs flex justify-center items-center'>
              5
            </span>
          </span>
          <div className='flex gap-4 items-center'>
            <img
              title='avatar'
              className='w-[50px] h-[50px] rounded-full object-cover object-top'
              src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
              alt=''
            />
            <span>
            <h4 className='font-medium'>Robert</h4>
            <span className='text-sm font-medium text-neutral-400'>#3030</span>
            </span>
          </div>
            <button className='flex items-center ml-6 text-xs hover:shadow-lg transition-all border-2 border-primary text-primary p-2 rounded-md' title='logout'>
            <LogoutIcon />
            Sign Out
            </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
