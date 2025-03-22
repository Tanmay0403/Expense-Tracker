import React from 'react'

const ButtonCards = ({title, handleClick}) => {
  return (
    <>
    <button className='bg-indigo-500 rounded-[10px] w-45 text-white font-bold' onClick={handleClick}> + {title}</button>
    </>
  )
}

export default ButtonCards