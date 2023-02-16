export function auth(req, res, next) {
    if (req.header('api-key') === 'c0d3r') {
        next()
    } else {
        res.status(401).json({ error: "No estas autorizado"})
    }
}