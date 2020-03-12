const axios = require("axios")
// const csv = require("jquery-csv")
const serveIndex = require('serve-index')
const path = require("path");
module.exports = {

    Example: function (req, res) {
        axios.get(serveIndex(path.join(__dirname)), function (err, data) {
            console.log(data)
        })
        .then(response => res.json(response.data))
        .catch(err => res.status(403).json(err))
    }
}
