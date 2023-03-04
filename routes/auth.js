const {Router} = require('express');
const router = Router()


router.get("/", (req, res)=>{
    res.send('Saludamos desde el servidor')
    })
    router.post("/", (req, res)=>{
    res.send('Saludamos desde el post')
    })
    router.put("/", (req, res)=>{
    res.send('Saludamos desde el put')
    })
    router.delete("/", (req, res)=>{
    res.send('Saludamos desde el delete')
    })

    module.exports = router;