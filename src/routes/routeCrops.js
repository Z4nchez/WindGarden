const express = require("express");
const router = express.Router();
const Crops = require("../models/crop");

router.get("/", async (req, res) => {
    try {
        const arregloCultivos = await Crops.find();
        res.render('crops', {arregloC : arregloCultivos});
    } catch (error) {
        console.log(error);
    }    
});

module.exports = router;