import React from 'react';

interface ICountCardProps {
  title: string;
  value: number;
  color: string;
  icon: any;
}

const CountCard = (props: ICountCardProps) => {
  return (
    <div className='p-4 border-2 border-neutral-100 shadow-sm rounded-md min-w-[200px]'>
      <span className='flex items-center gap-2 text-neutral-400 text-sm capitalize'>
        <span style={{backgroundColor: props.color}} className='p-[2px] rounded-md text-white opacity-90'>{props.icon}</span>
        {props.title}
      </span>
      <h3
        style={{ borderBottomColor: props.color }}
        className='font-heading font-bold my-2 text-secondary text-4xl pb-3 w-fit border-b-2'
      >
        {props.value}
      </h3>
    </div>
  );
};

export default CountCard;
