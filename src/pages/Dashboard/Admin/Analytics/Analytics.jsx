import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import { PieChart, Pie,  Cell, Legend } from 'recharts';


const Analytics = () => {
    const axiosSecure= useAxiosSecure()
    const {data:chartDatas =[], isLoading}=useQuery({
        queryKey:['chartData'],
        queryFn: async()=>{
            const {data}= await axiosSecure.get('/scholarship-category-states')
            return data.chartData
        }
    })
    console.log(chartDatas)

    const piChartData= chartDatas.map(data=>{
        return {name: data.category, value:data.application}
    })
  
    // const data = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    //   ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

      
    return (
       <div className=" flex flex-col justify-center items-center">
         <p className="text-4xl font-bold my-10 lg:my-10 text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
         Scholarship Category Distribution
                </p>

         <PieChart width={500} height={500}>
          <Pie
            data={piChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {piChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            
          </Pie>
          <Legend/>
        </PieChart>
       </div>
    );
};

export default Analytics;