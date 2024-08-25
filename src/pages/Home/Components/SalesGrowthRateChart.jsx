import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchSalesGrowthRate } from '../../../apis/sevices';

const SalesGrowthRateChart = () => {
    const [growthRateData, setGrowthRateData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSalesGrowthRate('monthly');
            setGrowthRateData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="lg:mb-10 md:mb-7 mb-5 lg:p-4 md:p-3 p-[10px] bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold mb-2 text-center">Sales Growth Rate Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={growthRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="_id" /> {/* Assuming `_id` holds the time period (month, day, etc.) */}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="growthRate" stroke="#82ca9d" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesGrowthRateChart;
