 
const express = require('express')
const app = express()


const tips = [
    {
        title: "Full stack-kurssi",
        link: "https://fullstackopen.com"
    },
    {
        title: "DevOps-kurssi",
        link: "https://devopswithdocker.com/"
    }
]

app.use(express.static('frontend/build'))

app.get('/api/tips', (req,res) => {
    res.send(tips)
})

const port = process.env.APIPORT == undefined ? 3001 : process.env.APIPORT
app.listen(port, () => {
    console.log(`TipLibrary Server running on port ${port}`)
})