
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';


export const getToken = () => {
    try{
        const userData = localStorage.getItem('userData');
        console.log("userData", userData)
        return JSON.parse(userData).accessToken; 
    }
    catch(err){
        console.log(err)
    }
};

// Generic fetch function
const fetchWithToken = async (url, method, body = null, customHeaders = {}) => {
    const token = getToken();
    console.log("token", token);
    const headers = {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '', 
        ...customHeaders, 
    };

    const options = {
        method,
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${url}`, options);

        // Handle response
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Something went wrong');
        }


        const data = await response.json();
        return data;
    } catch (error) {
        console.error('API Request Error:', error.message);
        throw error;
    }
};

// REST API methods

export const get = (url, customHeaders = {}) => {
    return fetchWithToken(url, 'GET', null, customHeaders);
};

export const post = (url, body, customHeaders = {}) => {
    return fetchWithToken(url, 'POST', body, customHeaders);
};

export const put = (url, body, customHeaders = {}) => {
    return fetchWithToken(url, 'PUT', body, customHeaders);
};

export const del = (url, customHeaders = {}) => {
    return fetchWithToken(url, 'DELETE', null, customHeaders);
};