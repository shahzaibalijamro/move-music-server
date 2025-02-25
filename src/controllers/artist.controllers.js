import axios from 'axios';

const getAllArtists = async (req, res) => {
    const access_token = req.access_token;
    const { search, name, ordering, page, page_size } = req.query;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/artists/`,
            {
                params: { search, name, ordering, page, page_size },
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

const addArtist = async (req, res) => {
    const access_token = req.access_token;
    const {
        name,
        amazon_music_identifier,
        apple_identifier,
        deezer_identifier,
        spotify_identifier,
        email
    } = req.body;
    // if (!name || !email || !amazon_music_identifier || !apple_identifier || !deezer_identifier || !spotify_identifier) {
    //     return res.status(400).json({ error: "Required fields not recieved!" });
    // }
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/artists/`,
            {
                name,
                amazon_music_identifier,
                apple_identifier,
                deezer_identifier,
                spotify_identifier,
                email
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

const getArtistById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/artists/${id}/`,
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

const updateArtist = async (req, res) => {
    const access_token = req.access_token;
    const {id} = req.params;
    const {
        name,
        amazon_music_identifier,
        apple_identifier,
        deezer_identifier,
        spotify_identifier,
        email,
        contributors
    } = req.body;
    // if (!name && !email && !amazon_music_identifier && !apple_identifier && !deezer_identifier && !spotify_identifier) {
    //     return res.status(400).json({ error: "No fields to update!" });
    // }
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/artists/${id}/`,
            {
                name,
                amazon_music_identifier,
                apple_identifier,
                deezer_identifier,
                spotify_identifier,
                email,
                contributors
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

const editArtist = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    const {
        name,
        amazon_music_identifier,
        apple_identifier,
        deezer_identifier,
        spotify_identifier,
        email,
        contributors
    } = req.body;
    // if (!name && !email && !amazon_music_identifier && !apple_identifier && !deezer_identifier && !spotify_identifier) {
    //     return res.status(400).json({ error: "Required fields not recieved!" });
    // }
    try {
        const response = await axios.patch(
            `${process.env.MAIN_SERVER_URL}/artists/${id}/`,
            {
                name,
                amazon_music_identifier,
                apple_identifier,
                deezer_identifier,
                spotify_identifier,
                email,
                contributors
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

export { getAllArtists,addArtist,getArtistById,updateArtist,editArtist };