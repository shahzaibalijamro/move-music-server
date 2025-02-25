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

const addTrack = async (req, res) => {
    const access_token = req.access_token;
    const {
        order,
        release,
        name,
        mix_name,
        language,
        vocals,
        artists,
        publishers,
        contributors,
        label_share,
        genre,
        subgenre,
        resource,
        dolby_atmos_resource,
        copyright_holder,
        copyright_holder_year,
        album_only,
        sample_start,
        explicit_content,
        ISRC,
        generate_isrc,
        DA_ISRC,
        track_length
    } = req.body;

    // Validate required fields
    // if (!release || !name || !language || !vocals || !genre || !subgenre) {
    //     return res.status(400).json({ error: "Required fields not received!" });
    // }

    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/tracks/`,
            {
                order,
                release,
                name,
                mix_name,
                language,
                vocals,
                artists,
                publishers,
                contributors,
                label_share,
                genre,
                subgenre,
                resource,
                dolby_atmos_resource,
                copyright_holder,
                copyright_holder_year,
                album_only,
                sample_start,
                explicit_content,
                ISRC,
                generate_isrc,
                DA_ISRC,
                track_length
            },
            {
                headers: {
                    "x-api-key": process.env.X_API_KEY,
                    "Referer": process.env.REFERER_URL,
                    "Authorization": `Bearer ${access_token}`,
                },
            }
        );

        res.status(201).json(response.data);
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

const updateTrack = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract track ID from URL path

    if (!id) {
        return res.status(400).json({ error: "Track ID is required" });
    }

    const {
        order,
        release,
        name,
        mix_name,
        language,
        vocals,
        artists,
        publishers,
        contributors,
        label_share,
        genre,
        subgenre,
        resource,
        dolby_atmos_resource,
        copyright_holder,
        copyright_holder_year,
        album_only,
        sample_start,
        explicit_content,
        ISRC,
        generate_isrc,
        DA_ISRC,
        track_length
    } = req.body;

    // Validate required fields
    // if (!release || !name || !language || !vocals || !genre || !subgenre) {
    //     return res.status(400).json({ error: "Required fields not received!" });
    // }

    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/tracks/${id}/`,
            {
                order,
                release,
                name,
                mix_name,
                language,
                vocals,
                artists,
                publishers,
                contributors,
                label_share,
                genre,
                subgenre,
                resource,
                dolby_atmos_resource,
                copyright_holder,
                copyright_holder_year,
                album_only,
                sample_start,
                explicit_content,
                ISRC,
                generate_isrc,
                DA_ISRC,
                track_length
            },
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

const editTrack = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract track ID from URL path

    if (!id) {
        return res.status(400).json({ error: "Track ID is required" });
    }

    const {
        order,
        release,
        name,
        mix_name,
        language,
        vocals,
        artists,
        publishers,
        contributors,
        label_share,
        genre,
        subgenre,
        resource,
        dolby_atmos_resource,
        copyright_holder,
        copyright_holder_year,
        album_only,
        sample_start,
        explicit_content,
        ISRC,
        generate_isrc,
        DA_ISRC,
        track_length
    } = req.body;

    try {
        const response = await axios.patch(
            `${process.env.MAIN_SERVER_URL}/tracks/${id}/`,
            {
                order,
                release,
                name,
                mix_name,
                language,
                vocals,
                artists,
                publishers,
                contributors,
                label_share,
                genre,
                subgenre,
                resource,
                dolby_atmos_resource,
                copyright_holder,
                copyright_holder_year,
                album_only,
                sample_start,
                explicit_content,
                ISRC,
                generate_isrc,
                DA_ISRC,
                track_length
            }, // Send only the updated fields
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

export {getAllTracks,getTrackById,addTrack,updateTrack,editTrack}