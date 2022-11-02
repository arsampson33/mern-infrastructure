const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()
require('./config/database')

const app = express()
const PORT = process.env.PORT || 3001;

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(cors())
// API Routes
app.use('/api/users' ,require('./routes/api/users'))
app.use('/api/users/login' ,require('./routes/api/users'))


// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})