
import Navbar from './components/Navbar';
import { useState } from 'react';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { FiToggleRight } from 'react-icons/fi';



// const StyledApp = styled.div`
//   color: ${(props) => props.theme.fontColor};
// `;


function App() {

  // const [theme, setTheme] = useState("light");

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <div className='app'>

      <Navbar/>
      
  {/* <div className='right'>
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  
      <GlobalStyles />
      <StyledApp  className='float-right mr-1' style={{marginTop: "-42rem"}}>
      
        <div onClick={() => themeToggler()}  ><FiToggleRight/></div>
      </StyledApp>
    </ThemeProvider>
    </div> */}
 
   
    </div>
  );
}

export default App;
