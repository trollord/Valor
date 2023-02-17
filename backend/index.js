const connectToAtlas = require("./db")
const express = require('express')
const cors = require('cors')

const app = express()
const port = 5000
connectToAtlas();

app.use(express.json());
app.use(cors())

app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))
app.use("/api/admin", require("./routes/admin"))

// app.use("/api/team", require("./routes/team"));

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})


