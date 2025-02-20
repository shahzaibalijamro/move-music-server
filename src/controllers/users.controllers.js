import axios from "axios";

const getUserDetails = async (req, res) => {
    const access_token = req.access_token;
    const { page, page_size } = req.query; // Use query parameters instead of params

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/users/`,
            {
                params: { page, page_size },
                headers: {
                    "x-api-key": process.env.X_API_KEY,
                    "Referer": process.env.REFERER_URL,
                    "Authorization": `Bearer ${access_token}`,
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const getLoggedinUser = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract user ID from URL path

    if (!id) {
        return res.status(400).json({ error: "User ID is required" });
    }

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/users/${id}/`,
            {
                headers: {
                    "x-api-key": process.env.X_API_KEY,
                    "Referer": process.env.REFERER_URL,
                    "Authorization": `Bearer ${access_token}`,
                },
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

export { getUserDetails, getLoggedinUser };