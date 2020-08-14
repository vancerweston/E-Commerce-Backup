const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://vancerweston:Crance.2017@cluster0.vr4hu.mongodb.net/E-Commerce?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        });
        console.log("Connected to DB!!");
    } catch (e) {
        console.log(e);
        throw e;
    }
}

module.exports = InitiateMongoServer;