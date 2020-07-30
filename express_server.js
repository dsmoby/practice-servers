const express = require("express")
const ourServer = express()
ourServer.use(express.urlencoded({ extended: false }))

ourServer.get("/", (req, resp) => {
  resp.send(
    `
        <form action="/action" method="POST">
            <P>
            What is your date of birth?
            </P>
            <input name="dob" type="date" />
            <input type="submit" value="Enter">
        </form>
       
        `
  )
})

ourServer.post("/action", (req, resp) => {
  const today_ms = new Date().getTime()
  const birth_ms = new Date(req.body.dob).getTime()
  const diff = today_ms - birth_ms
  const age = new Date(diff).getUTCFullYear() - 1970
  console.log(age)

  if (age >= 18) {
    resp.send(`
    <h1>You are adult</h1>
        `)
  } else {
    resp.send(`
    <h1>You are not adult yet</h1>
        `)
  }
})
ourServer.listen(3300)
