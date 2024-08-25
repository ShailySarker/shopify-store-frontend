import CustomerGeographyChart from "./Components/CustomerGeographyChart";
import CustomerLTVChart from "./Components/CustomerLTVChart";
import NewCustomersChart from "./Components/NewCustomersChart";
import RepeatCustomersChart from "./Components/RepeatCustomersChart";
import SalesGrowthRateChart from "./Components/SalesGrowthRateChart";
import TotalSalesData from "./Components/TotalSalesData";

const Home = () => {
    return (
        <div className="container mx-auto py-4 lg:px-20">
            <h1 className="text-3xl font-bold mb-4">Sales Dashboard</h1>
            <TotalSalesData />
            <SalesGrowthRateChart />
            <NewCustomersChart />
            <RepeatCustomersChart />
            <CustomerGeographyChart />
            <CustomerLTVChart />
        </div>
    );
};

export default Home;