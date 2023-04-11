import { Request, Response } from "express"

const express = require('express')
const app = express()
const port = 3000

app.get('/', (request: Request, response:Response) => {
  response.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})