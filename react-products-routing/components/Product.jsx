import React from 'react'
import { useLocation } from 'react-router'


function Product() {

  const {state} = useLocation()

  return (
    <div className='flex flex-col sm:flex-row justify-between mt-14'>
      <div className='w-2/5'>
      <img src={state?.product?.image} className='w-full' alt="" />
      </div>
      <div className='w-3/5 p-2 sm:p-10'>
        <p>{state?.product?.title}</p>
         <p>{state?.product?.description}</p>
          <p>{state?.product?.price}</p>
           <p>{state?.product?.category}</p>
      </div>
    </div>

  )
}

export default Product