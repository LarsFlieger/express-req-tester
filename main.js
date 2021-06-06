const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.all('*', (req, res) => {
    console.log("body:", req.body, "query:", req.query)
    res.send(JSON.stringify({statusCode: "200", message: "all good"})).status(200)
})

app.listen(PORT, () => console.log(`Listening at ${PORT}`))