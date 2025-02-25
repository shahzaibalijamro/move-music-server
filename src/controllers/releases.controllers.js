import axios from 'axios';

const getAllReleases = async (req, res) => {
    const access_token = req.access_token;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/releases/`,
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

const addRelease = async (req, res) => {
    const access_token = req.access_token;
    const {
        name,
        release_version,
        language,
        auto_detect_language,
        label,
        artists,
        publisher,
        publisher_year,
        copyright_holder,
        copyright_holder_year,
        genre,
        subgenre,
        kind,
        catalogue_number,
        artwork,
        is_new_release,
        official_date,
        original_date,
        exclusive_shop,
        territory,
        countries,
        backcatalog,
        ean,
        generate_ean,
        tracks,
        youtube_declaration,
        dolby_atmos
    } = req.body;

    // Validate required fields
    if (!name || !language || !label || !genre || !subgenre || !tracks || tracks.length === 0) {
        return res.status(400).json({ error: "Required fields not received or missing tracks!" });
    }

    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/releases/`,
            {
                name,
                release_version,
                language,
                auto_detect_language,
                label,
                artists,
                publisher,
                publisher_year,
                copyright_holder,
                copyright_holder_year,
                genre,
                subgenre,
                kind,
                catalogue_number,
                artwork,
                is_new_release,
                official_date,
                original_date,
                exclusive_shop,
                territory,
                countries,
                backcatalog,
                ean,
                generate_ean,
                tracks,
                youtube_declaration,
                dolby_atmos
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

const updateReleaseStatus = async (req, res) => {
    const access_token = req.access_token;
    const { id, action } = req.body; // Extract release ID and action from request body

    // Validate required fields
    if (!id || !action) {
        return res.status(400).json({ error: "Release ID and action are required!" });
    }

    // Allowed actions
    const allowedActions = ["distribute", "request_takedown", "submit_editing"];

    if (!allowedActions.includes(action)) {
        return res.status(400).json({
            error: "Invalid Action, please choose one of the allowed actions: distribute, request_takedown, submit_editing."
        });
    }

    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/releases/update-status/`,
            { id, action },
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

const getReleaseById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract release ID from URL path

    if (!id) {
        return res.status(400).json({ error: "Release ID is required!" });
    }

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/releases/${id}/`,
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

const updateRelease = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract release ID from URL path

    if (!id) {
        return res.status(400).json({ error: "Release ID is required!" });
    }

    const {
        name,
        release_version,
        language,
        auto_detect_language,
        label,
        artists,
        publisher,
        publisher_year,
        copyright_holder,
        copyright_holder_year,
        genre,
        subgenre,
        kind,
        catalogue_number,
        artwork,
        is_new_release,
        official_date,
        original_date,
        exclusive_shop,
        territory,
        countries,
        backcatalog,
        ean,
        generate_ean,
        tracks,
        youtube_declaration,
        dolby_atmos
    } = req.body;

    // Validate required fields
    // if (!name || !language || !label || !genre || !subgenre || !tracks || tracks.length === 0) {
    //     return res.status(400).json({ error: "Required fields not received or missing tracks!" });
    // }

    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/releases/${id}/`,
            {
                name,
                release_version,
                language,
                auto_detect_language,
                label,
                artists,
                publisher,
                publisher_year,
                copyright_holder,
                copyright_holder_year,
                genre,
                subgenre,
                kind,
                catalogue_number,
                artwork,
                is_new_release,
                official_date,
                original_date,
                exclusive_shop,
                territory,
                countries,
                backcatalog,
                ean,
                generate_ean,
                tracks,
                youtube_declaration,
                dolby_atmos
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

const editRelease = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params; // Extract release ID from URL path

    if (!id) {
        return res.status(400).json({ error: "Release ID is required!" });
    }

    const updatedFields = req.body; // Extract only the fields that need to be updated

    if (Object.keys(updatedFields).length === 0) {
        return res.status(400).json({ error: "No update fields provided!" });
    }

    try {
        const response = await axios.patch(
            `${process.env.MAIN_SERVER_URL}/releases/${id}/`,
            updatedFields, // Send only the updated fields
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

export { getAllReleases,addRelease,updateReleaseStatus,getReleaseById,updateRelease,editRelease };