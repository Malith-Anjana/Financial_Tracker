import React from "react"
import ExpensesCard from "../components/Card/ExpensesCard"

const ExpensesList = () => {
  return (
    <div className="p-4 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
      
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5 mb-4">
             
             <ExpensesCard/>
    
       </div>


    <div className="mx-auto max-w-screen-xl">

        <div className="bg-gray-50 dark:bg-gray-950 relative shadow-md sm:rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-100 dark:focus:border-primary-100" placeholder="Search" required=""/>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                        <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-white focus:outline-none bg-primary-100 rounded-lg border border-gray-200 hover:bg-gray-950 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-primary-100 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-950" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-white" viewbox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                            </svg>
                            Filter
                            <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                        </button>
                        <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                            <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                <li className="flex items-center">
                                    <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 dark:focus:ring-primary-100 focus:ring-primary-100 dark:checked:text-primary-100 checked:text-primary-100 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                </li>
                                <li className="flex items-center">
                                    <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 dark:focus:ring-primary-100 focus:ring-primary-100 dark:checked:text-primary-100 checked:text-primary-100 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                                    <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Orange (56)</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
                <table className="min-w-full text-sm table-auto text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-900 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Product name</th>
                            <th scope="col" className="px-4 py-3">Category</th>
                            <th scope="col" className="px-4 py-3">Brand</th>
                            <th scope="col" className="px-4 py-3">Description</th>
                            <th scope="col" className="px-4 py-3">Price</th>
                            <th scope="col" className="px-4 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-scroll w-full'>
                    <tr className="border-b dark:border-gray-700 h-12">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                       
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                            <td className="px-4 py-3">PC</td>
                            <td className="px-4 py-3">Apple</td>
                            <td className="px-4 py-3">300</td>
                            <td className="px-4 py-3">$2999</td>
                            <td className="px-4 py-3 flex items-center justify-end">
                                <button id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" className="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div id="apple-imac-27-dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>
            </div>
    
        </div>
    </div>

    </div>
  </div>
  )
}

export default ExpensesList