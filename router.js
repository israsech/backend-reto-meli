const express = require("express");
const router = express.Router();
const searchItemsUseCase = require('./use-cases/search-items.useCase');
const searchItemDetaill = require('./use-cases/search-item-detaill.useCase');

router.get("/api/items", async (req, res) => {
    const {q=''} = req?.query??{};
    if(q.trim().length===0){
        return{}
    }else{
        const respuesta = await searchItemsUseCase.handle(q)
        res.json( respuesta);
    }

});
router.get("/api/items/:id", async (req, res) => {
    const {id=''} = req.params;
    if(id.trim().length===0){
        return{}
    }else{
        const respuesta = await searchItemDetaill.handle(id)
        res.json( respuesta);
    }
});

router.use((req, res) => {
        res.status(400);
        res.json({
            error: "Bad request"
        });
    });

module.exports = router;