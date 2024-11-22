import React from 'react'
import  Image from 'next/image'

const Cards = () => {
  return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col gap-6 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className='flex gap-6'>
          <Image
            src="/pic1.png"

width={500}
height={500}
            alt="Image 1"
            className="w-96 h-64 object-cover rounded-md"
          />
          <Image
            src="/pic17.png"
            width={500}
            height={500}
            
            alt="Image 2"
            className="w-96 h-64 object-cover rounded-md"
          />
          <Image
            src="/pic19.png"
            width={500}
            height={500}
            
            alt="Image 3"
            className="w-96 h-64 object-cover rounded-md"
          />
          </div>
          
          <div className='flex gap-6 '>
            <Image 
            src="/pic7.png" 
 
 width={500}
 height={500}
            alt="Image 4" 
            className='flex-1 h-64 object-cover rounded-md shadow-md'
            />
            <Image 
            src="/pic13.png" 

width={500}
height={500}
            alt="Image 5" 
            className='flex-1 h-64 object-cover rounded-md shadow-md'
            />
          </div>
        </div>
      </div>
    );
  };


export default Cards
