import React from 'react'

import { MdNotificationsActive } from 'react-icons/md';


const Notification = () => {
  
  return (
    <>
        <div class="btn-group dropup flex">
            <button type="text" class=" hover:text-blue-700 dropdown-toggle flex" data-toggle="dropdown" aria-expanded="false">
                <MdNotificationsActive /> 
            </button>
            <div class="dropdown-menu">
            
                <li><a class="dropdown-item" href="#scrollspyHeading3">Transaction</a></li>
                <li><a class="dropdown-item" href="#scrollspyHeading4">successfull</a></li>
       
                < li><a class="dropdown-item" href="#scrollspyHeading5">OTP</a></li>
    
  </div>
</div>
    

          
 </>
  )
}

export default Notification