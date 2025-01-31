import { EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const HomeContacts = () => {
  return (
    <div className='bg-background dark:bg-background'>
      <div className='h-screen flex flex-col'>
        <div 
          className='
            h-1/2 p-10 py-14
            flex justify-start items-end 
            text-3xl
          '
        >
            Wanted to work together?
        </div>
        <div 
          className='
            h-1/2 px-10 py-14 
            flex justify-end items-start gap-2
            text-3xl
          '
        >
          Contact me here 
          <a href='#' className='underline'>cgfjjjnk@gmail.com</a>
        </div>
      </div>
      <footer
        className='
          h-16 p-6 
          flex items-center gap-3 
          bg-background dark:bg-background
        '
      >
        <h6><span className='text-sm mr-1'>©</span>2025</h6>
        <p>Abdullah Hasan</p>
      </footer>
    </div>
  )

}