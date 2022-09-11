const express = require("express");
const router = express.Router();
const Guias = require("../models/guide");

router.get("/", async (req, res) => {
    try {
        const arregloGuias = await Guias.find();
        res.render('guides', {arreglo : arregloGuias});
    } catch (error) {
        console.log(error);
    }    
});

module.exports = router;