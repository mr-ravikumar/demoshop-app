import React from 'react'
import { useState } from 'react'

const NewProduct = () => {
    const [formData, setFormData] = useState({
        name:"", date:""
    })
    function changeHandler(event) {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        })
    }
    function submitHandler(event) {
        event.preventDefault();
        console.log("Finally printing the data.");
        console.log(formData);
    }

  return (
    <div className='flex justify-center items-center h-[100px] bg-slate-600 p-5 rounded w-[450px]'>
        <form onSubmit={submitHandler} className='flex gap-2'>
            <label>
                <span className='text-white'>Name:</span>
                <input 
                    className='bg-black text-white p-1 rounded '
                    type='text'
                    name='name'
                    placeholder='Enter name'
                    value={formData.name}
                    onChange={changeHandler}
                />
            </label>

            <label>
                <span className='text-white'>Choose Date:</span>
                <input 
                    className='bg-black text-white p-1 rounded '
                    type='date'
                    name='date'
                    value={formData.date}
                    onChange={changeHandler}
                />
            </label>

            <button className='bg-white px-3 rounded-md h-[34px] mt-6'>Submit</button>
        </form>
    </div>
  )
}

export default NewProduct