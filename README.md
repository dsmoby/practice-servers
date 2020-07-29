# Practice Servers

##

It is part of learning Nodejs. Making server using express library

## Problem #1

### Description

The post request with answer from the `<input/>` element in the `<form>` was returning undefined and the logic failed

```javascript
ourApp.get("/", (req, resp) => {
  resp.send(
    `
        <form action="/answer" method="POST">
        <p>What is the color of water?</p>
        <input name"waterColor" type="text" />
        </form>

        `
  )
})
```

and the output in the console was

```bash
>> undefined
```

### Solution

There was simple mistake that I missed an equal sign `name"waterColor"` and hence correcting `name="waterColor"` removed the bug and the server runs as intended
