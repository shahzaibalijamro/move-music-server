const checkAccessToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Access token is missing or invalid" });
    }
    console.log("Extracted Access Token:", authHeader);
    req.access_token = authHeader.split(' ')[1];;
    next();
};

export { checkAccessToken};