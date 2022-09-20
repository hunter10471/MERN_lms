import React, { useState } from 'react';
import CountCard from '../components/CountCard';
import CoursesTable from '../components/CoursesTable';
import RecommendCard from '../components/RecommendCard';
import { countCardData, recommendData } from '../data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Home = () => {
  const [translateX, setTranslateX] = useState(0);
  const slideMover = (direction: boolean) => {
    if ((translateX >= (recommendData.length - 1) * 274) && direction)
      setTranslateX(0);
    else if ((translateX <=  0) &&  !direction)
      setTranslateX((recommendData.length - 1) * 274);
    else {
      setTranslateX((direction ? translateX + 274 : translateX - 274));
    }
    console.log(translateX);
  };
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
      <div className='shadow-lg mt-20 p-8 rounded-md max-w-[900px] overflow-hidden'>
        <div className='flex items-center w-full justify-between'>
          <h2 className='text-2xl font-heading font-bold '>
            Recommended Courses
          </h2>
          <div className='flex gap-4'>
            <button
              onClick={() => slideMover(false)}
              className='hover:scale-125 transition-all cursor-pointer disabled:text-neutral-300 disabled:cursor-default disabled:scale-100'
              disabled={translateX <= 0}
            >
              <ArrowBackIosIcon />
            </button>
            <button
              onClick={() => slideMover(true)}
              className='hover:scale-125 transition-all cursor-pointer disabled:text-neutral-300 disabled:cursor-default disabled:scale-100'
              disabled={translateX >= (recommendData.length - 1) * 274}
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
        <div
          style={{ transform: `translate(-${translateX}px)` }}
          className='flex my-5 gap-6 transition-all duration-300 ease-in-out '
        >
          {recommendData.map((el, index) => {
            return <RecommendCard {...el} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
