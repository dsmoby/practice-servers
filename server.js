const express = require("express")
const ourApp = express()

ourApp.get("/", function (req, resp) {
  resp.send(`
    <form action="/answer" method="POST">
    <p>What is the color of the sky?</p>
    <input name"skyColor" autcomplete="off" />
    <button type="submit">Enter</button>
    </form>
    `)
})

ourApp.post("/answer", (req, res) => res.send("Thank you for submitting the answer"))
ourApp.get("/answer", (req, res) => res.send("Are you lost? there's nothing to see here"))

ourApp.listen(4000)
