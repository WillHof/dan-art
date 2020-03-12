const router = require("express").Router();
const api = require("../controllers/apicontroller")
router.route("/api/paintingData")
    .get(api.Example)

module.exports = router