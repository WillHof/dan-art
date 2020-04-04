const axios = require("axios")
// const csv = require("jquery-csv")
const serveIndex = require('serve-index')
const path = require("path");
const fs = require('fs')
const PORT = process.env.PORT || 3001;

module.exports = {
    Example: function (req, res) {
        console.log(req.body)
        let targetPath = path.join(__dirname, "../client/src/assets/showPaintings/DH1;58x50.jpeg")
        let sourcePath = path.join(__dirname, "../client/src/assets/LargeAbstractions/DH2;40x56.jpg")
        // let paintingNames = fs.readdirSync(sourcePath);

    }
}
