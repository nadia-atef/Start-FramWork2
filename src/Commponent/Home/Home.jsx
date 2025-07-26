import React from 'react'
import Star from '../Star/Star'

import nf from '../../assets/imges/avataaars.svg'

export default function Home() {
  return (
    <>
   
   <div    className="vh-100  mt-6  text-center">
    <div  className="w-25   ">
      <img src={nf}   className="w-100  ms-7  "      alt="" />
    </div>
    {/* ========================================= */}


<h1  className='text-white'>START FRAMEWORK</h1>

      {/* ========================================= */}
   <Star color="white " />

{/* ======================= */}
    <div>
      <p  className=" text-white">Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </div>
    
    </>
  )
}
