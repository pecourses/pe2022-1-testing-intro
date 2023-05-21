const express = require('express')

const app = express()

app.get('/', (req, res) => res.status(200).send('Hello)'))

app.get('/users/4', (req, res) => res.status(200).send({ name: 'Test' }))

module.exports = app
