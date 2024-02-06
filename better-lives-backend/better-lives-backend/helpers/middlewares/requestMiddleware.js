module.exports = (req, res, next) => {

    const { path, headers, method, params, query, baseUrl, originalUrl, hostname, ip, body } = req;

    const log = {
        path: path,
        headers: headers,
        method: method,
        params: params,
        query: query,
        body: body,
        baseUrl: baseUrl,
        originalUrl: originalUrl,
        host: hostname,
        ip: ip,
        timestamp: new Date()

    }
    console.log(`| ${new Date().toISOString()} |`, JSON.stringify(log))
    next();

    2bPXOXnZpEMzr2IUSZLFkexYkYn_oXEnVhsCbAs3LCLQk867

}