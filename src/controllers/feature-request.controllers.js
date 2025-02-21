import axios from 'axios';

const getFeatureRequests = async (req, res) => {
    const access_token = req.access_token;
    const { search, ordering, page, page_size } = req.query;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/feature-request/`,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                },
                params: { search, ordering, page, page_size }
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.error("Error fetching feature requests:", error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const addFeatureRequests = async (req, res) => {
    const access_token = req.access_token;
    const {
        release,
        dj_tastemaker,
        radio_support,
        marketing_pr,
        label_reach,
        artist_remixer
    } = req.body;
    if (!dj_tastemaker || !radio_support || !marketing_pr || !label_reach || !artist_remixer) {
        return res.status(400).json({ error: "Required fields not recieved!" });
    }
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/feature-request/`,
            {
                release: release || null,
                dj_tastemaker,
                radio_support,
                marketing_pr,
                label_reach,
                artist_remixer
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
}

const getFeatureRequestById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/feature-request/${id}/`,
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

const updateFeatureRequest = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    const {
        release,
        dj_tastemaker,
        radio_support,
        marketing_pr,
        label_reach,
        artist_remixer
    } = req.body;
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/feature-request/${id}/`,
            {
                release: release || null,
                dj_tastemaker,
                radio_support,
                marketing_pr,
                label_reach,
                artist_remixer
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

const editFeatureRequest = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    const {
        release,
        dj_tastemaker,
        radio_support,
        marketing_pr,
        label_reach,
        artist_remixer
    } = req.body;
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/feature-request/${id}/`,
            {
                release: release || null,
                dj_tastemaker,
                radio_support,
                marketing_pr,
                label_reach,
                artist_remixer
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

export {getFeatureRequests,addFeatureRequests,getFeatureRequestById,updateFeatureRequest,editFeatureRequest }