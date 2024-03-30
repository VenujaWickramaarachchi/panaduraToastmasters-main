import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

const InfiniteExcoCards = ({ image, title, description, name }) => {
  const [showOverlay, setShowOverlay] = useState(false)
  return (
    <motion.div
      className='relative overflow-hidden rounded-xl'
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className='absolute inset-0 z-10 flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            <motion.h1
              className='bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[.5ch] hover:opacity-75'
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <span>read more</span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className=' card bg-accent min-w-[13rem] h-[25rem] flex justify-center items-center skeleton '>
        <figure className=' row-span-1 w-full '>
          <img
            src={image}
            alt='car!'
            className=' w-full h-full object-cover object-top '
          />
        </figure>
        <div className='card-body row-span-2'>
          <h1 className='text-xl w-[15rem] text-secondary '>{name}</h1>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          {/* <div className='card-actions justify-end'>
            <button className='btn btn-outline  btn-primary skeleton text-[.75rem] p-1 mt-1'>
              Read More About Me
            </button>
          </div> */}
        </div>
      </div>
    </motion.div>
  )
}
export default InfiniteExcoCards
