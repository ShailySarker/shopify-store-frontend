import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCustomerGeography } from '../../../apis/sevices';

const CustomerGeographyChart = () => {
    const [geographyData, setGeographyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCustomerGeography();
            setGeographyData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="mb-10 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2 text-center">Customer Geography Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={geographyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="customerCount" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerGeographyChart;