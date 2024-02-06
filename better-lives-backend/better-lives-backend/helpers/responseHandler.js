const successHandler = (req, res, next) => {
    if (req.route && req.route.path) {
        res.status(200)
        res.json({
            status: 200,
            data: res.data,
        });
        res.end();
        return;
    } else {
        next();
    }
}

const notFoundError = (req, res, next) => {
    if (!req.route || !req.route.path) {
        res.status(404);
        return res.json({
            error: 'Not found'
        });
    }
}

const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500)
    return res.json({
        status: err.status || 500,
        error: err,
    });
}

module.exports = {
    successHandler,
    notFoundError,
    errorHandler
}