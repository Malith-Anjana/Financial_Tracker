import React, { useEffect, useState } from "react";
import "./style.css";
const AddIncome = ({ isOpen, onClose }) => {
  const [income, setIncome] = useState({
    type: "",
    category: "",
    remark: "",
    date: "",
  });
  const [recategories, setRecategories] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const incomeCategories = ["Salary", "Freelance", "Other"];
  const expenseCategories = ["Foods", "House Rent", "Other"];

  const categoryList = () => {
    setRecategories(selectedType === "Income"
      ? incomeCategories
      : selectedType === "Expense"
      ? expenseCategories
      : "");
  };

  useEffect(() => {
    categoryList();
  }, [selectedType]);

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
    console.log("Selected value:", event.target.value);
  };
  console.log("selected value", selectedType);

  return (
    <>
      {isOpen && (
        <div className="overflow-y-auto flex overflow-x-hidden fixed z-50 bg-gray-600 bg-opacity-50 justify-center items-center w-full md:inset-0 h-[100vh] max-h-full">
          <div className="p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Create New Transaction
                </h3>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="crud-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form className="p-4 md:p-5" action="#">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Transaction Type
                    </label>
                    <select
                      value={selectedType}
                      onChange={handleSelectChange}
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected="">Select Type</option>
                      <option value="Income">Income</option>
                      <option value="Expense">Expense</option>
                      <option value="Loan">Loan</option>
                    </select>
                  </div>

                 {(selectedType === "Income" || selectedType === "Expense") && <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="category"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category
                    </label>
                    <select
                      id="Type"
                      className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected="">Select Type</option>
                      {recategories && recategories.map((i, index) => (
                        <option key={index} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>}
                 
                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Remark
                    </label>
                    <textarea
                      id="description"
                      required
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                    ></textarea>
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                    required
                      datepicker
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-primary-100 dark:bg-primary-100 hover:bg-gray-900  hover:dark:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Add new Transaction
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddIncome;
