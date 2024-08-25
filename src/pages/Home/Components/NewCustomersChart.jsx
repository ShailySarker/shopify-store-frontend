import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchNewCustomers } from '../../../apis/sevices';

const NewCustomersChart = () => {
    const [newCustomersData, setNewCustomersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchNewCustomers('monthly');
            setNewCustomersData(data);
        };
        fetchData();
    }, []);
    
    return (
        <div className="mb-10 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-2 text-center">New Customers</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={newCustomersData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="_id" /> {/* Assuming `_id` holds the time period (month, day, etc.) */}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="newCustomers" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NewCustomersChart;