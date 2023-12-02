import React, { useState } from 'react';

const Month = () => {
  const months = Array.from({ length: 12 }, (_, i) => ({ value: i + 1, label: `${i + 1}` }));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => ({ value: currentYear + i, label: `${currentYear + i}` }));

  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January
  const [selectedYear, setSelectedYear] = useState(currentYear); // Default to current year

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value, 10));
  };

  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex space-x-4">
      <div>
        <label htmlFor="month" className="block text-sm font-medium text-gray-700 dark:text-white">
          Month
        </label>
        <select
          id="month"
          name="month"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          {months.map((month) => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="year" className="block text-sm font-medium text-gray-700  dark:text-white">
          Year
        </label>
        <select
          id="year"
          name="year"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={selectedYear}
          onChange={handleYearChange}
        >
          {years.map((year) => (
            <option key={year.value} value={year.value}>
              {year.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Month;
