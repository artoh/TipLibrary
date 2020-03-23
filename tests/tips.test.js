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

test("add a tip with description", async () => {
    await api
        .post("/api/tips")
        .send({title:"With Description",
            link: "With link",
            description: "Test description"})
        .set("Content-type","application/json")
        .expect(201)
    
    const response =await api
        .get("/api/tips")

    const tipcount = response.body.length
    expect(response.body[tipcount-1].title).toBe("With Description")
    expect(response.body[tipcount-1].description).toBe("Test description")    
})

test("add a tip with tags", async () => {
    tip = await api
        .post("/api/tips")
        .send({title:"With Tags",
            link: "With link",
            description: "Test description",
            tags: ["tag1", "tag2", "tag3"]})
        .set("Content-type","application/json")
        .expect(201)
    
    const response =await api
        .get("/api/tips")

    console.log( response.body)    
    const tipcount = response.body.length
    expect(response.body[tipcount-1].title).toBe("With Tags")
    expect(response.body[tipcount-1].tags.length).toBe(3)    
})

test("delete first tip", async () => {
    const before = await api.get("/api/tips")
    const firstid = before.body[0].id
    const countBefore = before.body.length

    await api.delete("/api/tips/" + firstid).expect(200)

    const after = await api.get("/api/tips")
    expect(after.body.length).toBe(countBefore-1)
})

test("edit a tip with description and tags", async () => {
    const response = await api
        .get("/api/tips");
    const id = response.body[0].id

    await api
        .put("/api/tips/" + id)
        .send({title: "Edited title 2",
               link: "Edited test link 2",
                description: "Edited description",
                tags: ["one", "two"]})
        .set("Content-type", "application/json")
        .expect(200)

    const edited = await api
        .get("/api/tips/")

    expect(edited.body[0].title).toBe("Edited title 2")
    expect(edited.body[0].link).toBe("Edited test link 2")    
    expect(edited.body[0].description).toBe("Edited description")
    expect(edited.body[0].tags[1]).toBe("two")
})

afterAll(() => {
    mongoose.disconnect()
    setTimeout( () => process.exit(), 1000)
    
})
 