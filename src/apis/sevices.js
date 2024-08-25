import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchTotalSales = async (interval) => {
    const response = await axios.get(`${API_BASE_URL}/sales/total-sales`, {
        params: { interval },
    });
    return response?.data;
};

export const fetchSalesGrowthRate = async (interval) => {
    const response = await axios.get(`${API_BASE_URL}/sales/sales-growth-rate`, {
        params: { interval },
    });
    return response?.data;
};

export const fetchNewCustomers = async (interval) => {
    const response = await axios.get(`${API_BASE_URL}/customers/new-customers`, {
        params: { interval },
    });
    return response?.data;
};

export const fetchRepeatCustomers = async (interval) => {
    const response = await axios.get(`${API_BASE_URL}/customers/repeat-customers`, {
        params: { interval },
    });
    return response?.data;
};

export const fetchCustomerGeography = async () => {
    const response = await axios.get(`${API_BASE_URL}/customers/geography`);
    return response?.data;
};

export const fetchCustomerLTV = async () => {
    const response = await axios.get(`${API_BASE_URL}/customers/ltv-cohorts`);
    return response?.data;
};
