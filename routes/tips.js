const Router = require("express-promise-router")
const router = new Router()
module.exports = router

const Tip = require("../models/tip")

router.get("/", async (req,res) => {
    res.send( await Tip.find())
})

router.post("/", async (req,res) => {
    const body = req.body

    try {
        res.status(201).send(await Tip.create(body))
    } catch (e) {
        console.log(e.stack)
        return res.status(500).send()
    }
})

router.put('/:id', async (req, res) => {
    const body = req.body
   
    try {
        res.send(await Tip.findByIdAndUpdate(req.params.id, body, {new: true}))
    } catch (e) {
        console.log(e.stack)
        return res.status(500).send()
    }
})

router.delete('/:id', async(req, res) => {
    try{
        res.send(await Tip.findByIdAndRemove(req.params.id))
    } catch(e) {
        console.log(e.stack)
        res.status(500).send()
    }
})
