external fun require(module:String): dynamic

fun main(args: Array<String>) {
    println("Hello JavaScript!")

    val express = require("express")
    val app = express()

    app.get("/", {req, res->
        res.send("Hello World")
    })
    
    app.listen(3000)
}