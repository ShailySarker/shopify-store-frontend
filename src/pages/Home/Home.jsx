import CustomerGeographyChart from "./Components/CustomerGeographyChart";
import CustomerLTVChart from "./Components/CustomerLTVChart";
import NewCustomersChart from "./Components/NewCustomersChart";
import RepeatCustomersChart from "./Components/RepeatCustomersChart";
import SalesGrowthRateChart from "./Components/SalesGrowthRateChart";
import TotalSalesData from "./Components/TotalSalesData";

const Home = () => {
    return (
        <div className="py-4 lg:px-20 md:px-12 px-6 bg-slate-100">
            <h1 className="lg:text-3xl md:text-2xl text-xl font-semibold mb-4">Sales Dashboard</h1>
            <TotalSalesData />
            {/* <SalesGrowthRateChart />
            <NewCustomersChart />
            <RepeatCustomersChart />
            <CustomerGeographyChart />
            <CustomerLTVChart /> */}
        </div>
    );
};

export default Home;