import React from 'react'
import './sidebar.css'
import {UilEstate} from '@iconscout/react-unicons'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='menu'>
            <div className='menuItem active' >
                <div>
                 <UilEstate/>
                </div>
                <span className='e'>Doctors</span>
            </div>
            <div className='menuItem'>
                <div>
                 <UilEstate/>
                </div>
                <span className='e'>Ambulances</span>
            </div>
            <div className='menuItem' >
                <div>
                 <UilEstate/>
                </div>
                <span className='e'>Prescription</span>
            </div>
            
      </div>
    </div>
  )
}
