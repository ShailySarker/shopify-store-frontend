import axios from 'axios';

// const API_BASE_URL = 'https://shopify-store-backend.onrender.com/api';
const API_BASE_URL = 'http://localhost:5000/api';

// Fetch total sales data
export const fetchTotalSales = async (interval) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/sales/total-sales`, {
            params: { interval },
        });
        // console.log("response API_1:", response?.data);
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
        // console.log("response API_2:", response?.data?.data);
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching sales grow rate:", error);
        return [];
    }
};

// fetch New Customers
export const fetchNewCustomers = async (interval) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/new-customers`, {
            params: { interval },
        });
        // console.log("response API_3:", response?.data?.data)
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching New Customers:", error);
        return [];
    }
};

// fetch Repeat Customers
export const fetchRepeatCustomers = async (interval) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/repeat-customers`, {
            params: { interval },
        });
        // console.log("response API_4:", response?.data?.data)
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching Repeat Customers rate:", error);
        return [];
    }

};

// fetch Customer Geography
export const fetchCustomerGeography = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/geography`);
        // console.log("response API_5:", response?.data?.data)
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching customer geography:", error);
        return [];
    }
};

// fetch Customer LTV
export const fetchCustomerLTV = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/customers/ltv-cohorts`);
        console.log("response API_6:", response?.data?.data)
        return response?.data?.data;
    } catch (error) {
        console.error("Error fetching Customer LTV:", error);
        return [];
    }
};
