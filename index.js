const data = require("./controller")
const user = require("./nodecron")
const express = require("express");
const bodyParser = require("body-parser")
const env=require('dotenv')
env.config();

let app = express();
// app.use(express())
app.use(bodyParser.json())

let port = process.env.PORT;

app.get("/user", data.getData)
app.post("/add", data.postData)
app.delete("/delete", data.deleteData)
app.put("/update", data.updateData)

app.get("/getempdata", data.getEmpData)


user();


app.listen(port, () => {
    console.log("Server is connected at", port);
})