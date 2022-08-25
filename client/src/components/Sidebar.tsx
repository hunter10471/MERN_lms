import React from 'react';
import Logo from './Logo';
import { sidebarData } from '../data';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {
  const location = useLocation().pathname;

  return (
    <aside className='p-8 min-w-[250px] border-r-2 '>
      <Logo />
      <ul className='flex flex-col gap-6 my-10 ml-[-10px]'>
        {sidebarData.map((el, index) => {
          const homePage = el.title === 'overview';
          return (
            <li title={el.title} key={index}>
              <Link
                className={`flex items-center gap-2 w-full capitalize px-4 py-2 text-neutral-400 hover:text-white hover:bg-primary font-heading hover:shadow-lg ${
                location === el.title && 'bg-primary text-white shadow-lg'
                } rounded-full transition-all`}
                to={homePage ? '/' : `/${el.title}`}
              >
                {el.icon}
                {el.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
