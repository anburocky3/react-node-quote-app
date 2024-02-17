
const httpServer = require("http")
const SERVER_PORT = 4444
const quotesData = require("./data/quotes.json")

httpServer.createServer((req, res) => {
    console.log("Server is running at : " + SERVER_PORT)
    res.write(JSON.stringify(quotesData))
    res.end()

}).listen(SERVER_PORT)