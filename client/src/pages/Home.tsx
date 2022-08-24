import React from 'react';
import CountCard from '../components/CountCard';
import { countCardData } from '../data';

const Home = () => {
  return (
    <div className='w-full px-10 '>
      <h1 className='text-3xl font-heading font-bold '>Overview</h1>
      <div className='flex flex-wrap gap-4 my-5'>
        {countCardData.map((el, index) => {
          return <CountCard {...el} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Home;
