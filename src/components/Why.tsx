import React from 'react'
import config from '../config/index.json';

const Why = () => {
    const {why}=config
  return (
    <section id='pricing'>
          <div

      className=" min-h-screen xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {why.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        </div>
        <div className="grid sm:grid-cols-2  grid-cols-1 gap-10">

          {why.sections.map((section, index) => (
         <div className=' border-[1px] border-red-600 bg-gray-100 ' key={index}>
           <div className='flex justify-center items-center'>
           <img src={section.icon} className='w-16 h-16 p-2'/>
           </div>
            <h1 className=' text-center text-primary font-bold '>{section.title}</h1>
            <p className=' text-gray-600 text-center p-6'>{section.disc}</p>
         </div>
          ))}
        </div>
      
      </div>
    </div>
    </section>
  )
}

export default Why