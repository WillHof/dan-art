const axios = require("axios")
// const csv = require("jquery-csv")
const serveIndex = require('serve-index')
const path = require("path");
const fs = require('fs')

module.exports = {
    Example: function (req, res) {
        console.log(req.body)
    }
}
