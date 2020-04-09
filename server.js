const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path')
const routes = require("./routing/apiroutes");
require('dotenv').config()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.listen(PORT, () => console.log("app listening at http://localhost:" + PORT))
