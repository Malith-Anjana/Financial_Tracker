import React, { useContext, useEffect, useState } from "react"
import ExpensesCard from "../components/Card/ExpensesCard"
import { AuthContext } from "../context/AuthContext";
import { DateFilterContext } from "../context/DateFilterContext";
import useData from "../hooks/useData";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ExpensesList = () => {
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
    fetchData(`/transactions?type=${"expense"}&date=${date.year}-${date.month}`);
  }, [date]);

  useEffect(() => {

    configData();
  }, [date, isLoading,searchQuery,data]);



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
    const setData = searchQuery? filteredData : data
    const groupedByCategory = setData.reduce((accumulator, currentItem) => {
      const category = currentItem.category;
      const amount = parseFloat(currentItem.amount);

      if (!accumulator[category]) {
        accumulator[category] = { total: parseFloat(0.00), items: [] };
      }

      accumulator[category].total += amount;
      accumulator[category].items.push({ amount, category });

      return accumulator;
    }, {});

    // Convert string totals to numbers
    const numericItems = setData.map(item => ({ ...item, total: parseFloat(item.amount) }));
    // Calculate net total
   const netTotal = numericItems.reduce((acc, item) => acc + item.total, 0);
   const fixedTotal = parseFloat(netTotal)
   setCategoryData(groupedByCategory);
    setGrossTotal(fixedTotal);
  };

  //table body component
  const TableBody = () => {
    const setData = searchQuery? filteredData : data
    return (
      <tbody className="overflow-y-scroll w-full">
                    {data || filteredData ? (
                       setData.map((d, index) => (
                        <tr className="border-b dark:border-gray-700" key={index}>
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
                        className="flex items-center p-4 m-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
                        role="alert"
                      >
                        <svg
                          className="flex-shrink-0 inline w-4 h-4 me-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Prompt!</span>
                        <div>
                          <span className="font-medium">No Data Available</span>
                        </div>
                      </div>
                    )}
                  </tbody>
    )
  }

  
  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
      
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-4">
             
             <ExpensesCard data={categoryData} total={grossTotal}/>
    
       </div>


    <div className="mx-auto max-w-screen-xl">

        <div className="bg-gray-50 dark:bg-gray-950 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-100 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100"
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
                  <div className="w-full m-6">
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-primary-100"
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
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <TableBody/>
                )}
              </table>
            </div>
    
        </div>
    </div>

    </div>
  </div>
  )
}

export default ExpensesList