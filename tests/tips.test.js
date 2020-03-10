const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")

const api = supertest(app)

test ("tips returned as json", async() => {
    await api
        .get("/api/tips")
        .expect(200)
        .expect('Content-Type',/application\/json/)
})

test ("add a tip", async () => {
    await api
        .post("/api/tips")
        .send({title:"Test title",
                link: "Test link"})
        .set("Content-type","application/json")
        .expect(201)
    
    const response =await api
        .get("/api/tips")
    expect(response.body.length).toBe(1)
        
})

afterAll(() => {
    mongoose.disconnect()
    setTimeout( () => process.exit(), 1000)
    
})
 