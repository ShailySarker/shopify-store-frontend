import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchSalesGrowthRate } from '../../../apis/sevices';

const SalesGrowthRateChart = () => {
    const [growthRateData, setGrowthRateData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchSalesGrowthRate('monthly');
            setGrowthRateData(data);
            // console.log(data)
        };
        fetchData();
    }, []);

    const formattedData = growthRateData?.map(sale => ({
        date: sale?._id,
        growthRate: parseFloat(sale?.growthRate),
    }));

    return (
        <div className="lg:mb-10 md:mb-7 mb-5 lg:px-4 lg:py-8 md:px-3 md:py-6 px-[10px] py-4 bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">Sales Growth Rate Chart (Monthly Basis)</h2>
            <ResponsiveContainer width="100%" height={460}>
                <LineChart data={formattedData}
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" angle={-35} textAnchor="end" />
                    <YAxis 
                        domain={['auto', 'auto']}
                        tickFormatter={(value) => `${value}%`} 
                    />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend wrapperStyle={{ paddingTop: '45px', fontWeight: 600 }} />
                    <Line type="monotone" dataKey="growthRate" stroke="#82ca9d" activeDot={{ r: 6 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SalesGrowthRateChart;
