import axios from "axios";

const getStatements = async (req, res) => {
    const access_token = req.access_token;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/statements/`,
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

const getStatementById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/statements/${id}/`,
            {
                headers: {
                    'x-api-key': process.env.X_API_KEY,
                    Referer : process.env.REFERER_URL,
                    'Authorization': `Bearer ${access_token}`,
                }
            }
        );
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.response?.data);
        res.status(error.response?.status || 500).json(error.response?.data || { error: "Something went wrong" });
    }
}

export { getStatements,getStatementById }