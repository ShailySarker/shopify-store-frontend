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
        <div className="lg:mb-10 md:mb-7 mb-5 lg:px-4 lg:py-8 md:px-3 md:py-6 px-[10px] py-4 bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">Customer Geography Chart</h2>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={geographyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="city" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="customerCount" fill="#8884d8" />
                    {/* fill='#ccfbf1' stroke=" #0d9488" */}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerGeographyChart;