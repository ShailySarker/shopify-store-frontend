import { useEffect, useState } from 'react';
import { Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import { fetchRepeatCustomers } from '../../../apis/services';

const RepeatCustomersChart = () => {
    const [repeatCustomersData, setRepeatCustomers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchRepeatCustomers('monthly');
            const formattedData = data?.map(item => ({
                date: item?._id,
                repeatCustomer: item?.repeatCustomerCount,
            }));

            setRepeatCustomers(formattedData);
        };
        fetchData();
    }, []);

    return (
        <div className="lg:mb-10 md:mb-7 mb-5 lg:px-4 lg:py-8 md:px-3 md:py-6 px-[10px] py-4 bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">New Customers Chart (Monthly Basis)</h2>
            <ResponsiveContainer width="100%" height={460}>
                <AreaChart data={repeatCustomersData}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" angle={-35} textAnchor="end" />
                    <YAxis />
                    <Tooltip />
                    <Legend wrapperStyle={{ paddingTop: '45px', fontWeight: 600 }} />
                    <Area type="monotone" dataKey="repeatCustomer" fill='#fbcfe8' stroke="#ec4899" strokeWidth={1.8} activeDot={{ r: 6 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RepeatCustomersChart;