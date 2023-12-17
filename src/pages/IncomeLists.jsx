import React, { useContext, useEffect, useState } from "react";
import IncomeCard from "../components/Card/IncomeCard";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { DateFilterContext } from "../context/DateFilterContext";
import useData from "../hooks/useData";
import { AuthContext } from "../context/AuthContext";

const IncomeLists = () => {
  const [categoryData, setCategoryData] = useState();
  const [grossTotal, setGrossTotal] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { date } = useContext(DateFilterContext);
  const { data, error, isLoading, fetchData } = useData();

  function formatDate(string) {
    let options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  useEffect(() => {
    fetchData(`/transactions?type=${"income"}&date${toString(date)}`);
  }, [date]);

  useEffect(() => {
    configData();
  }, [isLoading,date, searchQuery,data]);
  
  useEffect(() => {
    // Set filteredData to the initial value of data on component mount
    setFilteredData(data);
  }, [data]);

  // Function to find any object based on the search query
  const handleSearch = (query) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowercasedQuery)
      )
    );
    setFilteredData(filtered);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };



  const configData = () => {
    // Grouping by category and calculating the sum for each category
    const groupedByCategory = filteredData.reduce((accumulator, currentItem) => {
      const category = currentItem.category;
      const amount = parseFloat(currentItem.amount);

      if (!accumulator[category]) {
        accumulator[category] = { total: 0, items: [] };
      }

      accumulator[category].total += amount;
      accumulator[category].items.push({ amount, category });

      return accumulator;
    }, {});

    // Calculating the overall total
    const overallTotal = Object.values(groupedByCategory).reduce(
      (total, category) => total + category.total,
      0
    );
    setCategoryData(groupedByCategory);
    setGrossTotal(overallTotal);
  };

  const deleteDialogBox = () => {
    return (
      <div
        id="alert-additional-content-2"
        class="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
        role="alert"
      >
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <h3 class="text-lg font-medium">This is a danger alert</h3>
        </div>
        <div class="mt-2 mb-4 text-sm">
          More info about this info danger goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div class="flex">
          <button
            type="button"
            class="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 me-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <svg
              class="me-2 h-3 w-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View more
          </button>
          <button
            type="button"
            class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
            data-dismiss-target="#alert-additional-content-2"
            aria-label="Close"
          >
            Dismiss
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-4">
          <IncomeCard data={categoryData} total={grossTotal} />
        </div>

        <div className="mx-auto max-w-screen-xl">
          <div className="bg-gray-50 dark:bg-gray-950 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
              <div className="w-full md:w-1/2">
                <form>
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      value={searchQuery}
                      onChange={handleChange}
                      type="search"
                      id="default-search"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100"
                      placeholder="Search Keywords"
                      required
                    />
                    <button
                      onClick={() => setSearchQuery("")}
                      className="text-white absolute end-2.5 bottom-2.5 bg-primary-100 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-100 dark:hover:bg-gray-800 dark:focus:ring-primary-100"
                    >
                      Clear
                    </button>
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
                    <th scope="col" className="py-3">
                      Action
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
                    {filteredData ? (
                      filteredData.map((d) => (
                        <tr className="border-b dark:border-gray-700">
                          <th
                            scope="row"
                            className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {d.category}
                          </th>
                          <td className="px-4 py-3">{d.remark}</td>
                          <td className="px-4 py-3  text-gray-900 dark:text-white">
                            ${d.amount}
                          </td>
                          <td className="px-4 py-3">{formatDate(d.date)}</td>
                          <td className="py-3">
                            <RiDeleteBin6Fill
                              onClick={() => deleteDialogBox()}
                              className="hover:text-primary-100 text-lg cursor-pointer"
                            />
                          </td>
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
