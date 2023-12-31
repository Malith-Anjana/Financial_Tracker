import React, { useEffect,useRef,useState } from 'react'
import MonthCalendar from '../MonthCalendar/MonthCalendar'
import { FaMoneyCheck, FaSun } from 'react-icons/fa6'
import { RiExchangeBoxFill, RiMoonClearFill } from 'react-icons/ri'
import { SiMoneygram } from "react-icons/si";

const Sidebar = () => {
    const [mode, setMode] = useState(false)
    const sidebarRef = useRef(null);
    const hamBtnRef = useRef(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const handleToggleSidebar = () => {
       setSidebarOpen(!isSidebarOpen);
    };
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        // Check if the clicked element is outside the div
        if ((sidebarRef.current && !sidebarRef.current.contains(event.target)) && (hamBtnRef.current && !hamBtnRef.current.contains(event.target)) ) {
          console.log('Clicked outside the div!');
          setSidebarOpen(false);
        }
      };
  
      // Add the event listener when the component mounts
      document.addEventListener('click', handleClickOutside);
  
      // Remove the event listener when the component unmounts
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []); // Empty dependency array to run the effect only once on mount
  


    useEffect(() => {
      modeChange();
    }, [mode])

      const [isDarkMode, setDarkMode] = useState(() => {
        // Check local storage for dark mode preference
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
      });
    
      useEffect(() => {
        // Update local storage when dark mode changes
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    
        // Apply dark mode styles to the document
        document.documentElement.classList.toggle('dark', isDarkMode);
      }, [isDarkMode]);
    
      const handleToggleDarkMode = () => {
        setDarkMode(!isDarkMode);
      };

    const modeChange = () => {
      if (localStorage.theme === 'dark' || mode ) {
         document.documentElement.classList.add('dark')
         console.log('dark');
       } else {
         document.documentElement.classList.remove('dark')
       }
      }
  return (
    <><button ref={hamBtnRef} onClick={handleToggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span className="sr-only">Open sidebar</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
 </button>
 
 <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950">
       <ul className="space-y-2 font-medium">
          <li>
             <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
             </a>
          </li>
          <li>
             <a href="/incomes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                 <FaMoneyCheck className='text-xl'/>
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Income</span>
             </a>
          </li>
          <li>
             <a href="/expenditures" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <RiExchangeBoxFill className='text-xl'/>
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Expenditures</span>
             </a>
          </li>
          <li>
             <a href="/loans" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <SiMoneygram className='text-xl'/>
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Loans</span>
             </a>
          </li>
          <li>
             <a href="signout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
             </a>
          </li>
          <li>
             <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                <div onClick={handleToggleDarkMode} className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  {isDarkMode ? <RiMoonClearFill className='text-xl'/>:
                  <FaSun className='text-xl'/>}
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">{isDarkMode ? "Dark Mode": "Light Mode"}</span>
             </div>
          </li>

       </ul>
       <MonthCalendar/>
    </div>
 </aside>
 {isSidebarOpen ?<aside ref={sidebarRef} className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform">
    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950">
       <ul className="space-y-2 font-medium">
          <li>
             <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                   <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                   <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                </svg>
                <span className="ms-3">Dashboard</span>
             </a>
          </li>
          <li>
             <a href="/incomes" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                 <FaMoneyCheck className='text-xl'/>
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Income</span>
             </a>
          </li>
          <li>
             <a href="/expenditures" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <RiExchangeBoxFill className='text-xl'/>
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Expenditures</span>
             </a>
          </li>
          <li>
             <a href="/loans" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <SiMoneygram className='text-xl'/>
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">Loans</span>
             </a>
          </li>
          <li>
             <a href="signout" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
             </a>
          </li>
          <li>
             <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group">
                <div onClick={()=> setMode(!mode)} className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  {!mode ? <RiMoonClearFill className='text-xl'/>:
                  <FaSun className='text-xl'/>}
                </div>
                <span className="flex-1 ms-3 whitespace-nowrap">{!mode ? "Dark Mode": "Light Mode"}</span>
             </div>
          </li>

       </ul>
       <MonthCalendar/>
    </div>
 </aside>:''}
 </>
  )
}

export default Sidebar;