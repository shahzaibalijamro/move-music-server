import axios from "axios";

const generateSignedUrl = async (req, res) => {
    const access_token = req.access_token;
    const { filename, filetype, upload_type } = req.query; // Extract query parameters

    // Validate required fields
    if (!filename || !filetype || !upload_type) {
        return res.status(400).json({ error: "Required fields not received!" });
    }

    // Validate upload_type
    const validUploadTypes = [
        "label.logo",
        "label.promo_graphic",
        "release.artwork",
        "release.license",
        "track.audio"
    ];

    if (!validUploadTypes.includes(upload_type)) {
        return res.status(400).json({ error: "Invalid upload_type provided!" });
    }

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/obtain-signed-url-for-upload/`,
            {
                params: { filename, filetype, upload_type },
                headers: {
                    "x-api-key": process.env.X_API_KEY,
                    "Referer": process.env.REFERER_URL,
                    "Authorization": `Bearer ${access_token}`,
                }
            }
        );

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

export { generateSignedUrl };