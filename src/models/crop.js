const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cropSchema = new schema({
    nombre : String,
    tipo: String,
    descripcion : String,
    imagen : String
})

const Crop = mongoose.model("Crop", cropSchema, "Crop");

module.exports = Crop;