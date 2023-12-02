import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip} from 'recharts'

const data = [
	{ name: 'Male', value: 540 },
	{ name: 'Female', value: 620 },
	{ name: 'Other', value: 210 }
]

const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.25
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function FinancePieChart() {
	return (
		<div className="w-[100%] h-96 p-4 flex flex-col  bg-gray-50 dark:bg-gray-950 text-center">
			<strong className="text-gray-900 dark:text-white font-medium">Overall Aspects</strong>
			<div className="mt-3 w-full flex-1 text-xs">
<ResponsiveContainer width="100%" height="100%">
<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							innerRadius={75}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip/>
						<Legend />
					</PieChart>
</ResponsiveContainer>
					
			</div>
		</div>
	)
}
