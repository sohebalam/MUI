import express from 'express'

const app =  express()

const API_PORT = process.env.PORT || 8000

app.use(express.json())

app.get('/:name', (req, res) => {
    res.send("response," + req.params.name)
})


app.listen(API_PORT, () => console.log(`listeing on Port + ${API_PORT}`))


