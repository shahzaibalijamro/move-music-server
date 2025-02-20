import axios from "axios";

const getTrends = async (req, res) => {
    const access_token = req.access_token;
    const { page, page_size, store, label, release, track, period } = req.query; // Extract query parameters

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/trends/`,
            {
                params: { page, page_size, store, label, release, track, period }, // Attach query parameters
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const getTrendById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract trend ID from URL path

    if (!id) {
        return res.status(400).json({ error: "Trend ID is required" });
    }

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/trends/${id}/`,
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
        console.error(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};


export {getTrends,getTrendById};