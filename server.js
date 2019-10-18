const express = require("express")
const app = express()
const PORT = process.env.PORT || 3001
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const routes = require("./routing/apiroutes")
app.use(routes)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log("app listening at http://localhost:" + PORT))
