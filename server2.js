let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({ extended: false }))

ourApp.get("/", function (req, resp) {
  resp.send(`
    <form action="/answer" method="POST">
    <p>What is the color of the sky?</p>
    <input name"skyColor" autcomplete="off" />
    <button>Enter</button>
    </form>
    `)
})

ourApp.post("/answer", function (req, res) {
  console.log(req.body.skyColor)
  if (req.body.skyColor == "blue") {
    res.send(`
    <p>Your answer is correct</p>
    <a href="/">Go back to homepage</a>
    `)
  } else {
    res.send(`
    <p>Sorry!!! your answer is incorrect</p>
    <a href="/">Go back to homepage</a>
    `)
  }
})

ourApp.listen(3000)
