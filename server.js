const express = require("express");
const path = require('path')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001;
const routes = require("./routing/apiroutes");
// const options = { maxAge: 864000000 } can pass options to express.static as a parameter
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => console.log("app listening at http://localhost:" + PORT))

