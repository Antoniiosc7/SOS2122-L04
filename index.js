const cool = require("cool-ascii-faces");
const express = require("express");

const port =8080;
const app = express();

app.get("/", (req, res)=>{
    console.log("Requested / route");
    res.send("<html><body><h1>"+cool()+" </h1></body></html>");
});

app.listen(port, () => {
    console.log(`Servidor listo en el puerto ${port}`);
});

