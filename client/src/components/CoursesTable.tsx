import React from 'react'
import { tableData } from '../data';


const CoursesTable = () => {
  return (
    <table className='my-4 '>
      <thead>
        <tr className='border-b-2 mb-5'>
          <th className='p-4 text-neutral-400 font-medium  text-left'>
            Course Name
          </th>
          <th className='p-4 text-neutral-400 font-medium  '>
            Classes Attended
          </th>
          <th className='p-4 text-neutral-400 font-medium  '>Duration</th>
          <th className='p-4 text-neutral-400 font-medium  '>Instructor</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((el, index) => {
          return (
            <tr className='font-medium odd:bg-neutral-100' key={index}>
              <td className='p-4 flex items-center gap-4 max-w-[250px]'>
                <img
                  className='w-[42px] h-[42px] rounded-md object-cover object-center '
                  src={el.img2}
                  alt=''
                />
                {el.title}
              </td>
              <td className='p-4 text-center'>{el.lessons}</td>
              <td className='p-4 text-center'>{el.duration}</td>
              <td className='p-4 flex items-center gap-4 '>
                <img
                  className='w-[42px] h-[42px] rounded-full object-cover object-top '
                  src={el.img}
                  alt=''
                />
                {el.instructor}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default CoursesTable