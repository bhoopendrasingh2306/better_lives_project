const { SCRAPER_REFRESH_DURATION_IN_MS } = require("./globalConstant")


const isRefresh = (time) => {
    return  ((new Date().getTime() - new Date(time).getTime()) > SCRAPER_REFRESH_DURATION_IN_MS)
}
function removeSpecialChars(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}



module.exports = {
    isRefresh,
    removeSpecialChars
}