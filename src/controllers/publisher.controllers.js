import axios from 'axios';

const getAllPublishers = async (req, res) => {
    const access_token = req.access_token;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/publishers/`,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const addPublisher = async (req, res) => {
    const access_token = req.access_token;
    const {
        name
    } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Required fields not recieved!" });
    }
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/publishers/`,
            {
                name
            },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        res.status(201).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const getPublisherById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/publishers/${id}/`,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const updatePublisher = async (req, res) => {
    const access_token = req.access_token;
    const {id} = req.params;
    const {
        name,
    } = req.body;
    if (!name) {
        return res.status(400).json({ error: "No fields to update!" });
    }
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/publishers/${id}/`,
            {
                name
            },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        res.status(200).json(response.data);
    }catch (error) {
        console.log(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
}

const editPublisher = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    const {
        name,
    } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Required fields not recieved!" });
    }
    try {
        const response = await axios.patch(
            `${process.env.MAIN_SERVER_URL}/publishers/${id}/`,
            {
                name
            },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
}

export {getAllPublishers,addPublisher,editPublisher,getPublisherById,updatePublisher}