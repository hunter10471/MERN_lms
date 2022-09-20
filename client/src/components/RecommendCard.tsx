import React from 'react';

interface IRecommendationCardProps {
  img: string;
  title: string;
  tag: string[];
  lessons: number;
  duration: number;
  color: string;
}

const RecommendCard = (props: IRecommendationCardProps) => {
  return (
    <div className='w-[250px] cursor-pointer flex-shrink-0'>
      <img
        style={{ backgroundColor: props.color }}
        className='w-[250px] h-[200px] object-cover p-6 rounded-md '
        src={props.img}
        alt=''
      />
      <div>
        <div className='flex gap-3 flex-wrap my-2 text-amber-600'>
          {props.tag.map((el, index) => {
            return <span key={index}>{el}</span>;
          })}
        </div>
        <h3 className='font-medium'>{props.title}</h3>
        <div className='flex gap-2 text-neutral-500'>
          <span className='pr-2 border-r-[4px]'>{props.lessons} lessons</span>
          <span>{props.duration} hours</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
