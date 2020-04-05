const router = require("express").Router();
const api = require("../controllers/apicontroller")
router.route("/api/sendMail")
    .post(api.email)

module.exports = router