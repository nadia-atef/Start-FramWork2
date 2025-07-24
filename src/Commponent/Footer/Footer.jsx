import React from 'react'

export default function Footer() {
  return (
    <>
   <footer  className='    '>
    <div>
      <div className="container  p6  text-white">
         <div className="row">
          {/* col 1 */}
        <div className="col-lg-4">
           <div className="item ">
            <p className=' size'>LOCATION</p>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
           </div>
        
  
        </div>
        {/* col 2 */}
        <div className="col-lg-4">
           <div className="item">
            <p className=' size'>AROUND THE WEB</p>
          <div className="container  ms-5   ">
             <div className="row     ">
            <div className="col-lg-2   ">
              <div className="item1   ">
                <i class="fa-brands   text-white fa-facebook"></i>
              </div>
            </div>
            
              <div className="col-lg-2">
              <div className="item1   ">
                <i class="fa-brands fa-twitter mx-1 icon"></i>
              </div>
            </div>
              <div className="col-lg-2">
              <div className="item1   ">
                <i class="fa-brands fa-linkedin-in mx-1 icon"></i>
              </div>
            </div>
              <div className="col-lg-2">
              <div className="item1   ">
                <i class="fa-solid fa-globe mx-1 icon"></i>
              </div>
            </div>
           </div>
          </div>
           </div>
       
  
        </div>



        {/* col 3 */}
          <div className="col-lg-4">
           <div className="item">
            <p className=' size'>ABOUT FREELANCER</p>
            <p>Freelance is a free to use, licensed Bootstrap</p>
            <p>theme created by Route</p>
           </div>
        
  
        </div>
      </div>
      </div>
     
    </div>

    {/* s */}


    <div className=' p-3 slid-color'>
      

      <p  className='text-white'>Copyright © Your Website 2021</p>
    </div>
   </footer>
    
    </>
  )
}
