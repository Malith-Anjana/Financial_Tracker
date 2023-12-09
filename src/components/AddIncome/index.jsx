import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import "./style.css";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";
import { ToastError, ToastLoading, ToastSuccess } from "../../constant/toasts";


const AddIncome = ({ isOpen, onClose }) => {
  const { currentUser } = useContext(AuthContext);
  const [recategories, setRecategories] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [category, setCategory] = useState("");
  const [remark, setRemark] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  
    const getCategories = async () => {
      try {
        const docRef = doc(
          db,
          selectedType === "Income"
            ? "IncomeCategories"
            : selectedType === "Expense"
            ? "ExpenseCategories": "test",
          "categories"
        );
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          const cl = docSnap.data();
          const catList = Object.keys(cl).map((attribute) => cl[attribute]);
          setRecategories(catList);
        } else {
          
        }
      } catch (error) {
        ToastError("Something went Wrong, Try again!");
      }
    
  };


  useEffect(() => {
    getCategories();
  }, [selectedType]);

  const handleSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)


    try {

      await addDoc(collection(db, selectedType), {
        transactionType: selectedType,
        userId: currentUser.uid,
        remark: remark,
        amount:amount,
        category: category,
        date: date,
        timeStanmp: serverTimestamp(),
      });
      setIsLoading(false);
      ToastSuccess("Data Added Successfully");
      // onClose();
      
    } catch (error) {
      ToastError("Something went Wrong, Try again!");
    } finally {
    }
  };

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

              <form onSubmit={handleSubmit} className="p-4 md:p-5" action="#">
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

                  {(selectedType === "Income" ||
                    selectedType === "Expense") && (
                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="category"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Category
                      </label>
                      <select
                        id="Type"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      >
                        <option selected="">Select Type</option>
                        {recategories &&
                          recategories.map((i, index) => (
                            <option key={index} value={i}>
                              {i}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Amount($)
                    </label>
                    <input
                      required
                      min="1" step="any"
                      datepicker
                      onChange={(e) => setAmount((Math.round(parseFloat(e.target.value) * 100) / 100).toFixed(2))}
                      type="number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date
                    </label>
                    <input
                      required
                      datepicker
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Select date"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Remark
                    </label>
                    <textarea
                      id="remark"
                      required
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write product description here"
                      onChange={(e) => setRemark(e.target.value)}
                    ></textarea>
                  </div>

                  
                </div>

                {!isLoading ? <button
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
                :
                <button disabled type="button" className="text-white bg-primary-100 dark:bg-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
<svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
</svg>
Sending Data...
</button>}
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddIncome;
