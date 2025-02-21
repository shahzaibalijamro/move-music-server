import axios from "axios";

const loginUser = async function (req, res) {
    const { username, password } = req.body;
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/auth/obtain-token/`,
            { username, password },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL
                }
            }
        );
        const { refresh, access } = response.data;
        res.cookie('refresh', refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 3 * 24 * 60 * 60 * 1000
        });
        res.status(response.status).json({ access,refresh });
    } catch (error) {
        console.log(error);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const refreshToken = async function (req, res) {
    const {refresh} = req.body;
    if (!refresh) {
        return res.status(401).json({ error: "No refresh token found" });
    }
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/auth/refresh-token/`,
            { refresh },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL
                }
            }
        );
        res.status(response.status).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
};

const verifyAccessToken = async function (req, res) {
    const { refresh } = req.cookies;
    const access = req.headers.authorization?.split(' ')[1];
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/auth/verify-token/`,
            { token: refresh || access },
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    'Referer': process.env.REFERER_URL
                }
            }
        );
        res.status(response.status).json({token: refresh || access});
    } catch (error) {
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
}

export {loginUser,refreshToken,verifyAccessToken};