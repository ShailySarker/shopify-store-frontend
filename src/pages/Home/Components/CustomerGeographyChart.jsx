import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { fetchCustomerGeography } from '../../../apis/sevices';

const CustomerGeographyChart = () => {
    const [geographyData, setGeographyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCustomerGeography();
            const formattedData = data?.map(item => ({
                city: item?._id,
                customerNumber: item?.count,
            }));

            setGeographyData(formattedData);
        };
        fetchData();
    }, []);

    return (
        <div className="lg:mb-10 md:mb-7 mb-5 lg:px-4 lg:py-8 md:px-3 md:py-6 px-[10px] py-4 bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">Customer Geography Chart</h2>
            <ResponsiveContainer width="100%" height={460}>
                <BarChart data={geographyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="city" angle={-35} textAnchor="end" />
                    <YAxis />
                    <Tooltip />
                    <Legend wrapperStyle={{ paddingTop: '45px', fontWeight: 600 }}/>
                    <Bar dataKey="customerNumber"  fill="#0d9488" strokeWidth={1.8} activeBar={<Rectangle fill='#99f6e4' stroke="#0d9488"/>} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerGeographyChart;