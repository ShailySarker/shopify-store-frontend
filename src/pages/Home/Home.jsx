import TotalSalesData from "./Components/TotalSalesData";

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Sales Dashboard</h1>
            <TotalSalesData />
        </div>
    );
};

export default Home;