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
        <div className="mb-6 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2 text-center">Sales Growth Rate Chart</h2>
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
