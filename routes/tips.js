const Router = require("express-promise-router")
const router = new Router()
module.exports = router

const Tip = require("../models/tip")

router.get("/", async (req,res) => {
    res.send( await Tip.find())
})

router.post("/", async (req,res) => {
    const body = req.body

    if( body.title == undefined || body.link == undefined) {
        return res.status(400).send({error:"Title or link undefined"})
    }

    try {
        await Tip.create({ title: body.title, link: body.link})
    } catch (e) {
        console.log(e.stack)
        return res.status(500)
    }
    res.status(201).send(body)
})