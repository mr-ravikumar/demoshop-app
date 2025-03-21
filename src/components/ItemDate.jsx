import React from 'react'

const ItemDate = (props) => {
    const month = props.date.toLocaleString("en-US", {month: "long"});
    const day = props.date.getDate();
    const year = props.date.getFullYear();
  return (
    <div className='flex flex-col w-[100px] bg-black justify-around items-center p-3 rounded-md'>
        <p className='font-semibold text-sm text-white'>{month}</p>
        <p className='text-white text-sm'>{year}</p>
        <p className='font-bold text-3xl text-white'>{day}</p>
    </div>
  )
}

export default ItemDate;