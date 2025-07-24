import React from 'react'
import Star from '../Star/Star'

export default function About() {
  return (
<>
 <div  className=' bg'>
 
  <div className="  container  mt-6   text-white text-center   ">
   <h1>about component</h1>
<Star  color='white'  />
  <div className="row">
    <div className="col-lg-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

    </div>

    {/* 2 */}
    <div className="col-lg-6">
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
    </div>
  </div>
  </div>
 </div>

</>
  )
}
