import React from 'react'
import Categorylist from './Categorylist'
import Recentpost from './Recentpost'

export default function Sidebar() {
  return (
    <>
     
 

    <div className='w-25 float-end mt-3  sidebar-box' style={{marginRight:"3rem"}}>


        <Categorylist />
        <Recentpost />
        
    </div>
    
    
    </>
  )
}
