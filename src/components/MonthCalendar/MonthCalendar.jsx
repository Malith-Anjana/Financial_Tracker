import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DateFilterContext } from "../../context/DateFilterContext";

const MonthCalendar = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [months, setMonths] = useState([]);
  const [currentMonth, setCurrentMonth] = useState("");

  const {dispatch} = useContext(DateFilterContext);
  const { date } = useContext(DateFilterContext);
  
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    getCurrentMonth();
    getCurrentYear();
   
  }, []); // Run only once on component mount

  useEffect(() => {
    const monthIndex = monthNames.findIndex(month => month.toLowerCase() === currentMonth.toLowerCase());
    const setDate = {'year': selectedYear, 'month':monthIndex +1, 'mName':currentMonth }
    dispatch({type:"SETDATE", payload:setDate});
  }, [selectedYear, currentMonth])


  const getCurrentYear = () => {
    const currentMonthIndex = new Date().getMonth();
    setCurrentMonth(monthNames[currentMonthIndex]);

    setMonths(monthNames);
  };

  const getCurrentMonth = () => {
    const currentYear = new Date().getFullYear();
    const yearOptions = Array.from({ length: 10 }, (_, i) => currentYear + i);
    setYears(yearOptions);
    setSelectedYear(currentYear.toString()); // Set default to current year
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

    const inActive = "w-full sm:w-auto bg-gray-500 dark:bg-gray-800  hover:bg-primary-100 text-white  focus:ring-4 focus:outline-none focus:ring-gray-30 dark:focus:ring-gray-700 rounded-md inline-flex items-center justify-center px-4 py-2.5"
    const active = "w-full sm:w-auto bg-primary-100 hover:bg-primary-100 text-white  focus:ring-4 focus:outline-none focus:ring-gray-30 dark:focus:ring-gray-700 rounded-md inline-flex items-center justify-center px-4 py-2.5"


  return (
    <div className="w-full p-4 mt-4 text-center border border-gray-200 rounded-lg dark:border-gray-700">
      <select
        id="underline_select"
        onChange={handleYearChange}
        value={selectedYear}
        className="block text-center text-3xl font-bold  py-2.5 px-0 w-full text-gray-800 bg-transparent border-0 appearance-none dark:text-white dark:bg-gray-950 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        {years.map((year) => (
          <option
            className="block text-center text-xl font-bold  py-2.5 px-0 w-full text-gray-800 bg-transparent border-0 appearance-none dark:text-white dark:bg-gray-950 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            key={year}
            value={year}
          >
            {year}
          </option>
        ))}
      </select>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
        {months.map((mnth, index) => (
          <a
            onClick={() => setCurrentMonth(mnth)}
            key={index}
            href="#"
            className={mnth === date.mName ? active : inActive}
          >
            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                {mnth.substring(0, 3)}
              </div>
            </div>
          </a>
        ))}
      </div>
            <div className="mt-3">
      <a onClick={()=> {getCurrentMonth(); getCurrentYear();}} className="hover:text-primary-100 hover:underline font-bold text-gray-900 cursor-pointer dark:text-gray-400">
        This Month
      </a>

            </div>
    </div>
  );
};

export default MonthCalendar;
