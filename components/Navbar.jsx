import React from 'react'
import { MdNotificationsActive } from 'react-icons/md';
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import Notification from './Notification';
import Contact from './Contact';
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes.js";
import { FiToggleRight } from 'react-icons/fi';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function Navbar() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className='antialiased min-h-screen relative'>
        <nav className='absolute z-10 w-58 bg-indigo-900 text-white h-screen'>
          <div className='flex justify-between'>
            <span className='  p-2'>
                <img className="w-28 h-7" src="https://binated.com/images/logo.png"/>
          
              <ul className='py-10' style={{fontSize: "8px"}}>
                <li className=''>Menu 1</li>
                <li className='mt-2'>Menu 2</li>
                <li className='mt-2'>Menu 3</li>
                <li className='mt-2'>Menu 4</li>
              </ul>
              </span>
          </div>
         <div className='flex px-4 text-xs' style={{marginTop: "31rem"}}>
           <Notification/>
           <a className='px-3'><Contact/></a>
         </div>
        </nav>
      <div className='relative z-0'>
      <header className='bg-gray-700 h-14'>
        <span className='block text-right font-bold p-3'>
        <input className="mb-1.5 text-xs" placeholder="search.." type="text" name="name" id="search" />
        </span>
      </header>
      <div className='right'>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  
      <GlobalStyles />
      <StyledApp  className='float-right mx-1.5 my-1.5'>
      
        <div onClick={() => themeToggler()}  ><FiToggleRight/></div>
      </StyledApp>
    </ThemeProvider>
    </div>
    </div>
    </div>
  )
}

export default Navbar