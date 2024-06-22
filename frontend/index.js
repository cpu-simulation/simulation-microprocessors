import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})


app.use(express.static('dist'))
app.use(express.json())

const m = [
    {
        address: "0x123",
        value: "010101"
    },
    {
        address: "0x435",
        value: "0101110"
    }
]

const r = {
    "PC": "0xAB13",
    "TR": "0x0000",
    "AR": "0x1111",
    "IR": "0xCF12",
    "DR": "0x34CC",
    "AC": "0x12DD",
    "E": "1"
}

app.get("/api", (req, res) => { res.json({ message: "Hello from server!" }) })

app.get("/api/memory/bulk_read", (req, res) => {
    res.json(m)
})

app.get("/api/register/read", (req, res) => {
    res.json(r)
})

app.post("/api/core/compile", (req, res) => {
    m.push({address: "0x003", value: "0101110"})
    res.json({})
})

app.post("/api/core/instruction", (req, res) => {
    r["PC"] = "0x0050"
    r["AR"] = "0x1111"
    r["IR"] = "0xCF12"
    res.json({})
})

// If user requested something other than APIs then it will be handled by the UI
app.use('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist' }, function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})