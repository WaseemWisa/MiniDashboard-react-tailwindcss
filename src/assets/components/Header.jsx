import {useState , useContext} from 'react'
import themeContext from './themeContext';
function Header() {
  const { darkMode, setDarkMode } = useContext(themeContext);

  const handleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`  header  flex justify-between  flex-wrap gap-y-2 my-3`}>
      <div className="leading-relaxed">
        <h3 className="text-2xl dark:text-[#fff]">Social Media Dashboard</h3>
        <span className='dark:text-slate-300'>Total Followers: 2M</span>
      </div>
      <div className={`border-top `}>
        <span className='font-normal text-slate-600 dark:text-slate-300'>Dark mode:</span>
        <button onClick={handleTheme} className="switchBtn"><span className={`switch ${darkMode ?  'translate-x-[15px]'  : 'translate-x-[-15px]'}  `}></span></button>
      </div>
    </div>
  );
}

export default Header