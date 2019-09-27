const jwt = require("jwt-simple");
const key = "*&((*&*(&(*&123"
const token = jwt.encode({
    adminName:"admin",
    lastTime:Date.now() + 240*60*60*1000
},key)

const results = jwt.decode(token,key)
console.log(results);