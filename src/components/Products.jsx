import React from 'react'
import ItemDate from './ItemDate';

const Products = (props) => {
    const products = props.products;
    
  return (
    <div className='bg-yellow-300  border-1 h-auto w-[450px] rounded-md flex flex-col justify-evenly'>
        {
            products.map((product) => {
                return (
                    <div className='flex justify-between bg-[#00ffff] mx-5 my-3 py-2 rounded-md px-4 items-center'>
                        <ItemDate date={product.date}/>
                        <div className='flex gap-3'>
                            <h1 className='font-bold text-3xl text-red-600'>{product.title}</h1>
                            <button className='bg-slate-600 text-white rounded-md p-2'>Add to cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products;