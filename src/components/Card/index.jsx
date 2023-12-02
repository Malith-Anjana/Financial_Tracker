import { CustomIcon} from "../../assets/icons/Icons";

const Card = () => {
    
  function BoxWrapper({ children }) {
    return <div className="rounded-sm p-4 flex-1 items-center flex justify-center lg:h-36 sm:h-28  bg-gray-50 dark:bg-gray-950">{children}</div>
}

  return (
	<>

    <BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center">
					<CustomIcon.wallet className="text-5xl text-blue-500" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Wallet</span>
					<div className="flex items-center">
						<strong className="text-4xl dark:text-white text-slate-950 font-semibold">$16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>


			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center">
					<CustomIcon.income className="text-5xl text-inGreen-500" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Income</span>
					<div className="flex items-center">
						<strong className="text-4xl dark:text-white text-slate-950 font-semibold">$26367</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center">
					<CustomIcon.expenses className="text-5xl text-yellow-300" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Expenses</span>
					<div className="flex items-center">
						<strong className="text-4xl dark:text-white text-slate-950 font-semibold">$16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>

			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center">
					<CustomIcon.loans className="text-5xl text-red-500" />
				</div>
				<div className="pl-4">
					<span className="text-xl text-gray-600 dark:text-gray-300 font-light">Loans</span>
					<div className="flex items-center">
						<strong className="text-4xl dark:text-white text-slate-950 font-semibold">$16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
	</>
  )
}

export default Card