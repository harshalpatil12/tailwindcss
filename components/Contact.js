import React from 'react'

import { MdOutlinePermContactCalendar } from 'react-icons/md'


const Contact = () => {
   
  return (
    <div class="btn-group dropup flex">
    <button type="text" class="dropdown-toggle flex" data-toggle="dropdown"  data-bs-toggle="dropdown" aria-expanded="false">
    < MdOutlinePermContactCalendar/>
    </button>
    <div class="dropdown-menu">
    <li><a class="dropdown-item" href="#scrollspyHeading3">Recent</a></li>
         <li><a class="dropdown-item" href="#scrollspyHeading4">Add</a></li>
     
    <li><a class="dropdown-item" href="#scrollspyHeading5">Delete</a></li>
    </div>
  </div>

  )

  
}

export default Contact