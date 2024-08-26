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
        <div className="lg:mb-10 md:mb-7 mb-5 lg:px-4 lg:py-8 md:px-3 md:py-6 px-[10px] py-4 bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">Total Sales Over Time (Monthly Basis)</h2>
            <ResponsiveContainer width="100%" height={460}>
                <LineChart data={formattedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" angle={-35} textAnchor="end" />
                    <YAxis />
                    <Tooltip />
                    <Legend wrapperStyle={{ paddingTop: '45px', fontWeight: 600 }}  />
                    <Line type="monotone" dataKey="totalSales" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TotalSalesData;