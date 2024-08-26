import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
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
        <div className="lg:mb-10 md:mb-7 mb-5 lg:p-4 md:p-3 p-[10px] bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">New Customers (Monthly Basis)</h2>
            <ResponsiveContainer width="100%" height={460}>
                <BarChart data={newCustomersData}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="_id" angle={-35} textAnchor="end" />
                    <YAxis  />
                    <Tooltip />
                    <Legend wrapperStyle={{ paddingTop: '45px', fontWeight: 600 , color: "#f97316" }} color='#f97316'/>
                    <Bar dataKey="newCustomers" fill="#fed7aa" stroke="#f97316" strokeWidth={1.8} activeBar={<Rectangle  fill="#f97316" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NewCustomersChart;