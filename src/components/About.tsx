import React from 'react';
import config from '../config/index.json';


const About = () => {
  const {  about } = config;
 
  const {  sections ,About} = about;

  return (
    <div
      id="about"
      className=" min-h-screen xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {About.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 ">
     <div className='md:px-[100px] sm:px-[200px] p-6'>
     <p className=' text-gray-600  text-center text-[20px]'>{about.disc}</p>
     </div>
          {sections.map((section, index) => (
         <div className=' border-2 border-red-600   w-[400px] h-auto p-6' key={index}>
           <div className='flex justify-center items-center'>
           <img src={section.img} className='w-16 h-16 '/>
           </div>
            <h1 className=' text-center text-primary font-bold '>{section.name}</h1>
            <p className=' text-gray-600 text-center'>{section.content}</p>
         </div>
          ))}
        </div>
      
      </div>
    </div>
  );
};
export default About;
