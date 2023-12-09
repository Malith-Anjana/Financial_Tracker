import React from "react";
const IncomeCard = ({data, total}) => {
	console.log(data);
    // const data = categoryData.data;
	console.log(total);

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
						<strong className="text-3xl dark:text-white text-slate-950 font-semibold">${data[category].totalAmount}</strong>
					</div>
				</div>
			</BoxWrapper>
			))}
            <div className="rounded-md p-4 flex-1 items-center flex justify-center lg:h-26 sm:h-24  bg-green-500 dark:bg-green-800">
				<div className="text-center">
					<span className="text-xl text-white dark:text-white font-light">Total</span>
					<div className="items-center">
						<strong className="text-4xl text-white font-semibold">${total}</strong>
					</div>
				</div>
			</div>
	</>
  )
}

export default IncomeCard