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
        res.status(201).send(await Tip.create({ title: body.title, link: body.link}))
    } catch (e) {
        console.log(e.stack)
        return res.status(500)
    }
})

router.put('/:id', async (req, res) => {
    const body = req.body
   
    try {
        res.send(await Tip.findByIdAndUpdate(req.params.id, body, {new: true}))
    } catch (e) {
        console.log(e.stack)
        return res.status(500)
    }
})