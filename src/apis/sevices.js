import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch total sales data
export const fetchTotalSales = async (interval) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sales/total-sales`, {
            params: { interval },
        });
        console.log("response API_1:", response?.data)
        return response?.data;
    } catch (error) {
        console.error("Error fetching total sales data:", error);
        return [];
    }
};

// fetch sales grow rate
export const fetchSalesGrowthRate = async (interval) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sales/sales-growth-rate`, {
            params: { interval },
        });
        console.log("response API_2:", response?.data)
        return response?.data;
    } catch (error) {
        console.error("Error fetching sales grow rate:", error);
        return [];
    }
    ;
};

// export const fetchNewCustomers = async (interval) => {
//     const response = await axios.get(`${API_BASE_URL}/customers/new-customers`, {
//         params: { interval },
//     });
//     return response?.data;
// };

// export const fetchRepeatCustomers = async (interval) => {
//     const response = await axios.get(`${API_BASE_URL}/customers/repeat-customers`, {
//         params: { interval },
//     });
//     return response?.data;
// };

// export const fetchCustomerGeography = async () => {
//     const response = await axios.get(`${API_BASE_URL}/customers/geography`);
//     return response?.data;
// };

// export const fetchCustomerLTV = async () => {
//     const response = await axios.get(`${API_BASE_URL}/customers/ltv-cohorts`);
//     return response?.data;
// };
