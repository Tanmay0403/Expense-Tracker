import React from 'react'

const CategoryCards = ({icon, button_name}) => {
  return (
   <>
  <button className='rounded-[40px] px-5 py-2.5 bg-gray-100 border-none outline-none flex justify-center items-center gap-2 text-[16px] font-normal leading-[18.4px]'><img src={icon} alt="" />
  {button_name}
  </button>
   </>
  )
}

export default CategoryCards