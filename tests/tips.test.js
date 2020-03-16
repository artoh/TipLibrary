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
    expect(response.body[0].title).toBe("Test title")
    expect(response.body[0].link).toBe("Test link")
        
})

test("edit a tip", async () => {
    const response = await api
        .get("/api/tips");
    const id = response.body[0].id
    expect(response.body[0].title).toBe("Test title")

    await api
        .put("/api/tips/" + id)
        .send({title: "Edited title",
               link: "Edited test link" })
        .set("Content-type", "application/json")
        .expect(200)

    const edited = await api
        .get("/api/tips/")

    expect(edited.body[0].title).toBe("Edited title")
    expect(edited.body[0].link).toBe("Edited test link")
})

afterAll(() => {
    mongoose.disconnect()
    setTimeout( () => process.exit(), 1000)
    
})
 