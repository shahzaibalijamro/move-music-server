import axios from "axios";

const releaseUserDeclaration = async (req, res) => {
    const access_token = req.access_token;
    const {
        release,
        user_declaration,
        release_license
    } = req.body;
    try {
        const response = await axios.post(`${process.env.MAIN_SERVER_URL}/release-user-declaration/`, {
            release,
            user_declaration,
            release_license
        }, {
            headers: {
                'x-api-key': process.env.X_API_KEY,
                'Referer': process.env.REFERER_URL,
                'Authorization': `Bearer ${access_token}`,
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.response?.data);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
}

export {releaseUserDeclaration}