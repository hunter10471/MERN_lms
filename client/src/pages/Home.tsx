import React from 'react';
import CountCard from '../components/CountCard';
import CoursesTable from '../components/CoursesTable';
import RecommendCard from '../components/RecommendCard';
import { countCardData, recommendData } from '../data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Home = () => {
  return (
    <div className='w-full px-10 text-secondary'>
      <h1 className='text-3xl font-heading font-bold '>Overview</h1>
      <div className='flex flex-wrap gap-4 my-5'>
        {countCardData.map((el, index) => {
          return <CountCard {...el} key={index} />;
        })}
      </div>
      <h2 className='text-2xl font-heading font-bold mt-10'>
        Currently Ongoing Courses
      </h2>
      <CoursesTable />
      <div className='shadow-lg mt-20 p-8 rounded-md max-w-[900px]'>
        <div className='flex items-center w-full justify-between'>
          <h2 className='text-2xl font-heading font-bold '>
            Recommended Courses
          </h2>
          <div className='flex gap-4'>
            <span className='hover:scale-125 transition-all cursor-pointer'>
              <ArrowBackIosIcon />
            </span>
            <span className='hover:scale-125 transition-all cursor-pointer'>
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>
        <div className='flex gap-6 my-5'>
          {recommendData.map((el, index) => {
            return <RecommendCard {...el} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
