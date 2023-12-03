import { CustomIcon} from "../../assets/icons/Icons";

const ExpensesCard = () => {
    
  function BoxWrapper({ children }) {
    return <div className="rounded-sm p-4 flex-1 items-center flex justify-center lg:h-26 sm:h-24  bg-gray-50 dark:bg-gray-950">{children}</div>
}

  return (
	<>
            <BoxWrapper>

				<div className="text-center">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Foods</span>
					<div className="items-center">
						<strong className="text-3xl dark:text-white text-slate-950 font-semibold">$16432</strong>
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>

				<div className="text-center">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">House Rent</span>
					<div className="items-center">
						<strong className="text-3xl dark:text-white text-slate-950 font-semibold">$16432</strong>
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>

				<div className="text-center">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Campus Fees</span>
					<div className="items-center">
						<strong className="text-3xl dark:text-white text-slate-950 font-semibold">$16432</strong>
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>

				<div className="text-center">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Cloths</span>
					<div className="items-center">
						<strong className="text-3xl dark:text-white text-slate-950 font-semibold">$16432</strong>
					</div>
				</div>
			</BoxWrapper>
            <BoxWrapper>

				<div className="text-center">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Others</span>
					<div className="items-center">
						<strong className="text-3xl dark:text-white text-slate-950 font-semibold">$16432</strong>
					</div>
				</div>
			</BoxWrapper>
            <div className="rounded-sm p-4 flex-1 items-center flex justify-center lg:h-26 sm:h-24  bg-gray-100 dark:bg-gray-900">
				<div className="text-center">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Total</span>
					<div className="items-center">
						<strong className="text-4xl text-red-600 font-semibold">$16432</strong>
					</div>
				</div>
			</div>
	</>
  )
}

export default ExpensesCard