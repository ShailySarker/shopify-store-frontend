import NewCustomersChart from "./Components/NewCustomersChart";
import SalesGrowthRateChart from "./Components/SalesGrowthRateChart";
import TotalSalesData from "./Components/TotalSalesData";

const Home = () => {
    return (
        <div className="container mx-auto py-4 lg:px-20">
            <h1 className="text-3xl font-bold mb-4">Sales Dashboard</h1>
            <TotalSalesData />
            <SalesGrowthRateChart />
            <NewCustomersChart />
        </div>
    );
};

export default Home;