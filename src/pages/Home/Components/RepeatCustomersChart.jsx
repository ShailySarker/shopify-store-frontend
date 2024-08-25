import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchRepeatCustomers } from '../../../apis/sevices';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RepeatCustomersChart = () => {
    const [repeatCustomersData, setRepeatCustomersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRepeatCustomers('monthly');
            setRepeatCustomersData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="lg:mb-10 md:mb-7 mb-5 lg:p-4 md:p-3 p-[10px] bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold mb-2 text-center">Repeat Customers Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={repeatCustomersData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                    >
                        {repeatCustomersData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RepeatCustomersChart;