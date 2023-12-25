import { CustomIcon} from "../../assets/icons/Icons";
import React from "react";
const ExpensesCard = ({data, total}) => {
	function BoxWrapper({ children }) {
		return <div className="rounded-md p-4 flex-1 items-center flex justify-center lg:h-26 sm:h-24  bg-gray-50 dark:bg-gray-950">{children}</div>
	}
	
	  return (
		<>
				{data && Object.keys(data).map(category => (
				<BoxWrapper key={category}>
	
					<div className="text-center">
						<span className="text-xl text-gray-600 dark:text-gray-300 font-light">{category}</span>
						<div className="items-center">
							<strong className="text-3xl dark:text-white text-slate-950 font-semibold">${data[category].total % 1 !== 0 ? data[category].total.toFixed(2) : data[category].total}</strong>
						</div>
					</div>
				</BoxWrapper>
				))}
				<div className="rounded-md p-4 flex-1 items-center flex justify-center lg:h-26 sm:h-24  bg-red-600 dark:bg-red-600">
					<div className="text-center">
						<span className="text-xl text-white dark:text-white font-light">Total</span>
						<div className="items-center">
							<strong className="text-4xl text-white font-semibold">${total % 1 !== 0 ? total.toFixed(2): total}</strong>
						</div>
					</div>
				</div>
		</>
	  )
}

export default ExpensesCard