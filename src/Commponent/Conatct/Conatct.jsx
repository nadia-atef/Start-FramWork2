import React from 'react'
import Star from '../Star/Star'

export default function Conatct() {
  return (
    <>
   <div className='vh-100  mt-6'>

     <h1   className=' text-center'>CONATCT SECTION</h1>
     <div   className="text-center"> 

        <Star/>
     </div>

   
     {/* ===================================== */}

<div className="container mt-4">
  <form>
    <div className="mb-2 text-center  ">
  
      <input type="text" className="form-contro border1     w-50 " id="userName" placeholder="userName" />
    </div>

    {/* ==================================================================================== */}
  <div className="mb-2    text-center">
  
      <input type="number" className="form-contro   mt-4   border1 w-50 " id="userAge" placeholder="userAge" />
    </div>

        
    {/* ================================================================================== */}

 <div className="mb-2   text-center">
  
      <input type="email" className="form-contro  mt-4   border1 w-50 " id="userEmail" placeholder="userEmail" />
    </div>

   {/* ================================================================================== */}
 <div className="mb-2   text-center">
  
      <input type="password" className="form-contro mt-4  border1 w-50 " id="userPassword" placeholder="userPassword" />
    </div>
    {/* ================================================================================== */}
  

    <button type="submit" className="btn btn-success   ms-6">send Message</button>
  </form>
</div>



     {/* ============================== */}
    
   </div>
    </>
  )
}
