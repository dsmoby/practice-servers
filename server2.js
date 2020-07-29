let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({ extended: false }))

ourApp.get("/", function (req, resp) {
  resp.send(`
    <form method="POST" action="/answer" >
    <p>What is the color of the sun?</p>
    <input name="sunColor" type="text">
    <input type="submit" value="Enter">Enter</input>
    </form>
    `)
})

ourApp.post("/answer", function (req, res) {
  console.log(req.body.sunColor)
  if (req.body.sunColor.toLowerCase() == "white") {
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

ourApp.listen(3200)
