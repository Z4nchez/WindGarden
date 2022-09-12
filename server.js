const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const regionSchema = require("./src/models/region");
const guideSchema = require("./src/models/guide");
const cropSchema = require("./src/models/crop");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.API_KEY,
    api_secret : process.env.API_SECRET
})

require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@proyects.kxrihqg.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("Base de datos conectada"))
.catch(e => console.log(e))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, "src/public")));
app.use("/", require("./src/routes/routeIndex.js"));
app.use("/guides", require("./src/routes/routeGuide.js"));
app.use("/crops", require("./src/routes/routeCrops.js"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.post("/obtenerDB", async (req, res) =>{
    let nombreRegion = req.body.dato.trim();
    let elementoEncontrado = await regionSchema.find({nombre: nombreRegion})
    res.send(elementoEncontrado);
})

app.post("/obtenerGuias", async (req, res) => {
    let tituloGuia = req.body.dato.trim();
    let elementoEncontrado = await guideSchema.find({_id: tituloGuia})
    res.send(elementoEncontrado);
})

app.post("/obtenerCultivos", async (req, res) => {
    let tituloCultivo = req.body.dato.trim();
    let elementoEncontrado = await cropSchema.find({tipo: tituloCultivo})
    res.send(elementoEncontrado);
})

app.post("/obtenerCultivo", async (req, res) => {
    let tituloCultivo = req.body.dato.trim();
    let elementoEncontrado = await cropSchema.find({nombre: tituloCultivo})
    res.send(elementoEncontrado);
})

app.listen(port);

