const mongoose = require("mongoose");
const schema = mongoose.Schema;

const regionSchema = new schema({
    nombre : String,
    titulo : String,
    imagen1 : String,
    imagen2 : String,
    imagen3 : String,
    articulo1 : String,
    articulo2 : String,
    articulo3 : String
})

const Region = mongoose.model("Region", regionSchema, "Region");

module.exports = Region;