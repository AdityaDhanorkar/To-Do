
const  mongoose = require("mongoose");
const { string } = require("zod");

// mongodb://rp261261:6JiPNSyfDqTPUBs9@cluster0-shard-00-00.nh6xp.mongodb.net:todos

mongoose.connect("mongodb://rp261261:6JiPNSyfDqTPUBs9@cluster0-shard-00-00.nh6xp.mongodb.net:27017,cluster0-shard-00-01.nh6xp.mongodb.net:27017,cluster0-shard-00-02.nh6xp.mongodb.net:27017/?replicaSet=atlas-2ghj54-shard-0&ssl=true&authSource=admin")
const todoSchema = mongoose.Schema({
    tittle : String,
    description : String,
    Complete : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo :todo
}