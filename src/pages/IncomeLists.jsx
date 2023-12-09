import React, { useEffect, useState } from "react";
import IncomeCard from "../components/Card/IncomeCard";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ToastError } from "../constant/toasts";

const IncomeLists = () => {
  const [date, setDate] = useState();
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function formatDate(string) {
    let options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  useEffect(() => {
    getData();
  }, [date]);


const configData = (datas) => {
    const organizedData = datas.reduce((acc, item) => {
        const { category, amount } = item;
        acc[category] = acc[category] || { totalAmount: 0, items: [] };
        acc[category].totalAmount += amount;
        acc[category].items.push(item);
        return acc;
      }, {});
      setCategoryData(organizedData);
}

  const getData = async () => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "Income"));
      onSnapshot(q, (querySnapshot) => {
        const datas = [];
        querySnapshot.forEach((doc) => {
          datas.push(doc.data());
        });
        setData(datas);
        configData(datas);
        setIsLoading(false);
      });
    } catch (error) {
      isLoading(false);
      ToastError("Something went Wrong, Try again!");
    }
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-4">
          <IncomeCard data={categoryData}/>
        </div>

        <div className="mx-auto max-w-screen-xl">
          <div className="bg-gray-50 dark:bg-gray-950 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100"
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"></div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              <table className="min-w-full text-sm table-auto text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Remark
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Date
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <div class="w-full m-6">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary-100"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>

                ) : (
                  <tbody className="overflow-y-scroll w-full">
                    {data ? (
                      data.map((d) => (
                        <tr className="border-b dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {d.category}
                          </th>
                          <td className="px-4 py-3">{d.remark}</td>
                          <td className="px-4 py-3  text-gray-900 dark:text-white">
                            {d.amount}
                          </td>
                          <td className="px-4 py-3">{formatDate(d.date)}</td>
                        </tr>
                      ))
                    ) : (
                      <div
                        class="flex items-center p-4 m-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                        role="alert"
                      >
                        <svg
                          class="flex-shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Prompt!</span>
                        <div>
                          <span class="font-medium">No Data Available</span>
                        </div>
                      </div>
                    )}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeLists;
