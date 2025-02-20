import axios from "axios";

const getAllTracks = async (req, res) => {
    const access_token = req.access_token;
    const { search, release, genre, subgenre, ordering, page, page_size } = req.query; // Extract query parameters

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/tracks/`,
            {
                params: { search, release, genre, subgenre, ordering, page, page_size }, // Attach query parameters
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

const getTrackById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Track ID is required" });
    }

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/tracks/${id}/`,
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


export {getAllTracks,getTrackById}