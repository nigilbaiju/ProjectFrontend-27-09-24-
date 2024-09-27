import React from 'react'
import './Topbar.css'

export const Topbar = () => {
  return (
    <div className='topbar' >
    <div className="topbarwrapper">
      <div className="topleft">
        <span className="logo">
          SMS PROJECT
        </span>
      </div>
     
      <div className='topright'>
        
        <button >Log Out</button>
       
      </div>

    </div>
  </div>
  )
}
