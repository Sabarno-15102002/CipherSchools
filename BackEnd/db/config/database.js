const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = require("./config");


module.exports = {
    MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.yfwfi0n.mongodb.net/CipherschoolsDB?retryWrites=true&w=majority`
    // MongoURI: `mongodb+srv://admin-sabarno-ananya:learnwithpix123@cluster0.yfwfi0n.mongodb.net/CipherschoolsDB?retryWrites=true&w=majority`
}