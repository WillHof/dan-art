const axios = require("axios")

module.exports = {
    Example: function (req, res) {
        axios.get('')
            .then(data => res.json(data))
            .catch(err => console.log(err))
    }
}