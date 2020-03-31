const axios = require("axios")
// const csv = require("jquery-csv")
const serveIndex = require('serve-index')
const path = require("path");
const fs = require('fs')
const PORT = process.env.PORT || 3001;

module.exports = {
    Example: function (req, res) {
        if (PORT === 3001) {
            console.log(req.body)
            let paintingNames = fs.readdirSync(path.join(__dirname, "../client/src/", req.body.page));
            console.log(paintingNames)
            // for (let index = 0; index < paintingNames.length; index++) {
            //     let element = paintingNames[index];
            //     paintingNames[index] = '.src/' + element
            // }
            res.json(paintingNames);
        }
        else {
            console.log('prod');
            // let paintingNames = fs.readdirSync(path.join(__dirname, "../client/src/", req.body.page));
        }
        // axios.get(serveIndex(path.join(__dirname)), function (err, data) {
        //     console.log('req recieved')
        // })
        // .then(response => res.json(response.data))
        // .catch(err => res.status(404).json(err))
    }
}
