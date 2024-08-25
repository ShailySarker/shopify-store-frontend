import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCustomerLTV } from '../../../apis/sevices';

const CustomerLTVChart = () => {
    const [ltvData, setLTVData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCustomerLTV();
            setLTVData(data);
        };
        fetchData();
    }, []);

    return (
        <div className="mb-10 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2 text-center">Customer LTV Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={ltvData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="cohort" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="ltv" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerLTVChart;