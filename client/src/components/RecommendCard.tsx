import React from 'react'

interface IRecommendationCardProps{
    img: string;
    title: string;
    tag: string[];
    lessons: number;
    duration: string;
    color: string;
}

const RecommendCard = (props: IRecommendationCardProps) => {
  return (
      <div className='max-w-[250px] cursor-pointer'>
          <div style={{backgroundColor:props.color}} className='w-full h-[120px] flex justify-center items-center'>
          <img className='w-[50%] h-[50%] object-cover' src={props.img} alt="" />
          </div>
          <div>
              <div className='flex gap-2 flex-wrap my-2 text-amber-600'>{props.tag.map((el, index) => {
                  return <span key={index} >{ el }</span>
              })}</div>
              <h3 className='font-medium my-2'>{props.title}</h3>
              <div>
                  <span>{props.lessons} lessons</span>
                  <span>{ props.duration } hours</span>
              </div>
          </div>
    </div>
  )
}

export default RecommendCard