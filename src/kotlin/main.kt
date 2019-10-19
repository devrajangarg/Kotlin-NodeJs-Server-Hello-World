external fun require(module: String): dynamic

fun main(args: Array<String>) {

    val port = 3000

    println("Server running on https://localhost:$port")

    val express = require("express")
    val app = express()

    app.get("/") { req, res ->
        res.send("Hello World")
    }

    app.listen(port)

}