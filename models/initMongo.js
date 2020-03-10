const mongoose = require("mongoose")
const mongoInMemory = require("mongodb-memory-server")

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

const initMongoInMemory = async () => {
    const mongoServer = new mongoInMemory.MongoMemoryServer();
    const uri = await mongoServer.getUri();
    mongoose.connect( uri, mongooseOptions)
}

const initMongoInService = () => {
    mongoose.connect( process.env.MONGOURI, mongooseOptions)
}

module.exports = async () => {
    if( process.env.MONGOURI == undefined) {
        await initMongoInMemory();
    } else {
        initMongoInService();
    }
}
