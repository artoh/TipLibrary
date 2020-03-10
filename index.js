const app = require("./app") 
const http = require("http")

const server = http.createServer(app)
const port = process.env.PORT == undefined ? 3001 : process.env.PORT

server.listen(port, () => {
    console.log(`TipLibrary Server running on port ${port}`)
})