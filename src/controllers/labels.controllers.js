import axios from 'axios';

const getLabels = async (req, res) => {
    const access_token = req.access_token;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/labels/`,
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

const addLabel = async (req, res) => {
    const access_token = req.access_token;
    const {
        name,        
        logo,
        primary_genre,
        year,
        catalog_num  
    } = req.body;
    if (!name || !logo || !primary_genre) {
        return res.status(400).json({ error: "Required fields not recieved!" });
    }
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/labels/`,
            {
                name,
                logo,
                primary_genre,
                year,
                catalog_num,
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

const validateLabelName = async (req, res) => {
    const access_token = req.access_token;
    const { label_name } = req.body;
    try {
        const response = await axios.post(
            `${process.env.MAIN_SERVER_URL}/labels/validate-label-name/`,{
                label_name,
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

const getLabelById = async (req, res) => {
    const access_token = req.access_token;
    const { id } = req.params;
    try {
        const response = await axios.get(
            `${process.env.MAIN_SERVER_URL}/labels/${id}/`,
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

const updateLabel = async (req, res) => {
    const access_token = req.access_token;
    const {id} = req.params;
    const {
        name,        
        logo,
        primary_genre,
        year,
        catalog_num
    } = req.body;
    if (!name && !logo && !primary_genre && !year && !catalog_num) {
        return res.status(400).json({ error: "No fields to update!" });
    }
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/labels/${id}/`,
            {
                name,
                logo,
                primary_genre,
                year,
                catalog_num
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

const editLabel = async (req, res) => {
    const access_token = req.access_token;
    const {id} = req.params;
    const {
        name,        
        logo,
        primary_genre,
        year,
        catalog_num
    } = req.body;
    if (!name && !logo && !primary_genre && !year && !catalog_num) {
        return res.status(400).json({ error: "No fields to update!" });
    }
    try {
        const response = await axios.put(
            `${process.env.MAIN_SERVER_URL}/labels/${id}/`,
            {
                name,
                logo,
                primary_genre,
                year,
                catalog_num
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

export { getLabels,addLabel,validateLabelName,getLabelById,updateLabel,editLabel };