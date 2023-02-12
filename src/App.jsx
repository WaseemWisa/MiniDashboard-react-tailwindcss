import {useState} from 'react';
import Header from './assets/components/Header';
import SocialInfo from './assets/components/SocialInfo';
import Statics from './assets/components/Statics';
import {AiFillGithub} from 'react-icons/ai'
import themeContext from './assets/components/themeContext';

function App() {
  const [darkMode , setDarkMode] = useState(false)
  return (
      <div className={`app w-full  relative  ${darkMode ? 'dark' : 'light'}`}>
        <div className=' dark:bg-slate-800 min-h-[100vh]'>
          <div className={`headerOverlay  w-full h-[220px]  absolute top-0 left-0 z-[998] shadow-md bg-slate-100 dark:bg-slate-600`}></div>
          <div className={`container relative w-[85%] my-0 mx-auto px-2 py-3 z-[999]`}>
            {       
              <themeContext.Provider value={{darkMode , setDarkMode}}>
                  <Header />
                  <SocialInfo />         
                  <Statics />
              </themeContext.Provider>
            }
          </div>
          <div className='w-full flex justify-center flex-col items-center pb-2'>
            <span className='flex items-center  dark:text-[#fff]'>Developed By: <a href="https://github.com/WaseemWisa" target="_blank"  className='mx-1 flex items-center gap-x-1 font-medium text-lg'>Waseem Wisa  <AiFillGithub/></a></span>
          </div>
        </div>
      </div>
  );
}

export default App
