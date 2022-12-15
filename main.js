const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let counter = 0;
app.get("/", (req, res) => {
    console.log(`${counter++} : ${performance.now()}`)
    res.send("Hello World");
});


app.listen(port, () => {
   console.log(`Server started using port ${port}`); 
});


