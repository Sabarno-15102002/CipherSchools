const { DB_USERNAME, DB_PASSWORD, DB_CLUSTER } = require("./config");


module.exports = {
    MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.pd5gx8u.mongodb.net/CipherschoolsDB?retryWrites=true&w=majority`
}
