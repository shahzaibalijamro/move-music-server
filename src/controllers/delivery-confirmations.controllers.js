import axios from 'axios';

const getDeliveryConfirmations = async (req, res) => {
    const access_token = req.access_token;
    const { search, release, action, ordering, page, page_size } = req.query;

    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/ddex-delivery-confirmations/`,
            {
                params: { search, release, action, ordering, page, page_size },
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

const getDeliveryConfirmationById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/ddex-delivery-confirmations/${id}/`,
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

export { getDeliveryConfirmations,getDeliveryConfirmationById }