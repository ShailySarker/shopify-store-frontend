import { useEffect, useState } from 'react';
import { fetchTotalSales } from '../../../apis/sevices';
import { LineChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const TotalSalesData = () => {
    const [totalSalesData, setTotalSalesData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const totalSales = await fetchTotalSales('monthly');
            setTotalSalesData(totalSales);
        };
        fetchData();
    }, []);

    const formattedData = totalSalesData?.map(sale => ({
        date: sale?._id, // Assuming sale._id contains the date
        totalSales: sale?.totalSales,
    }));

    return (
        <div className="mb-6 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2 text-center">Total Sales Over Time</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={formattedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalSales" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalSalesData;