const mongoose = require("mongoose");
const schema = mongoose.Schema;

const guideSchema = new schema({
    name : String,
    title : String,
    article : String,
    img : String
})

const Guide = mongoose.model("Guide", guideSchema, "Guide");

module.exports = Guide;