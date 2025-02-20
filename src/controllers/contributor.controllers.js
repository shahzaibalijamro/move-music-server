import axios from 'axios';

// Get contributors
// Private API
const getContributors = async (req, res) => {
    const access_token = req.access_token;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/contributors/`,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    Referer: process.env.REFERER_URL,
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res
            .status(error.response?.status || 500)
            .json(error.response?.data || { error: 'Something went wrong' });
    }
};

// Add contributors
// Private API
const addContributor = async (req, res) => {
    const access_token = req.access_token;
    const { name } = req.body;
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/contributors/`,
            {
                name,
            },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    Referer: process.env.REFERER_URL,
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res
            .status(error.response?.status || 500)
            .json(error.response?.data || { error: 'Something went wrong' });
    }
};

// Get Contributors by id
const getContributorById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/contributors/${id}`,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    Referer: process.env.REFERER_URL,
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res
            .status(error.response?.status || 500)
            .json(error.response?.data || { error: 'Something went wrong' });
    }
};

// Update Contributors by id
const updateContributorById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    const { name } = req.body;
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/contributors/${id}`,
            {
                name
            },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    Referer: process.env.REFERER_URL,
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res
            .status(error.response?.status || 500)
            .json(error.response?.data || { error: 'Something went wrong' });
    }
};


// Patch Contributors by id
const patchContributorById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    const { name } = req.body;
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/contributors/${id}`,
            {
                name
            },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    Referer: process.env.REFERER_URL,
                    Authorization: `Bearer ${access_token}`,
                },
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res
            .status(error.response?.status || 500)
            .json(error.response?.data || { error: 'Something went wrong' });
    }
};




export {
    getContributors,
    addContributor,
    getContributorById,
    updateContributorById,
    patchContributorById
};