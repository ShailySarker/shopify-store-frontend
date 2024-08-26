import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchCustomerLTV } from '../../../apis/services';

const CustomerLTVChart = () => {
    const [LTVData, setLTVData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCustomerLTV(); // Fetch your data here
            const formattedData = data?.flatMap(item =>
                item?.monthly_clv?.map(entry => ({
                    month: entry?.month,
                    clv: entry?.clv,
                    id: item?._id, // Add the id to differentiate lines
                }))
            );

            // Group data by month and id
            const groupedData = formattedData.reduce((acc, curr) => {
                const existing = acc.find(item => item?.month === curr?.month && item?.id === curr?.id);
                if (existing) {
                    existing.clv += curr?.clv; // Aggregate CLV if month and id are the same
                } else {
                    acc.push({ month: curr?.month, clv: curr?.clv, id: curr?.id });
                }
                return acc;
            }, []);

            setLTVData(groupedData);
        };

        fetchData();
    }, []);

    // Get unique IDs for the lines
    const uniqueIDs = [...new Set(LTVData?.map(item => item?.id))];

    // Function to generate colors dynamically
    const getColor = (index) => {
        const colors = ["#8884d8", "#82ca9d", "#ff7300", "#ffc658", "#d0ed57", "#a4de6c", "#ffc0cb"];
        return colors[index % colors.length]; // Cycle through the colors
    };

    return (
        <div className="lg:mb-10 md:mb-7 mb-5 lg:px-4 lg:py-8 md:px-3 md:py-6 px-[10px] py-4 bg-white shadow rounded">
            <h2 className="lg:text-xl md:text-lg text-base font-semibold lg:mb-16 md:mb-10 mb-6 text-center">Monthly Customer Lifetime Value</h2>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={LTVData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {uniqueIDs?.map((id, index) => (
                        <Line
                            key={id}
                            type="monotone"
                            dataKey={`clv`}
                            stroke={getColor(index)} // Get color dynamically based on index
                            dot={false}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomerLTVChart;