// ! Requires (Start)
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const _ = require('debug')('_ route_'+path.basename(__filename,path.extname(__filename)) + ' =>   ')

// ? Routers (Start)
const indexRouter = require('./routes/index')
// const trainerRouter = require('./routes/trainer')
// ? Routers (End)

// ! Requires (End)

const app = express()

// Set up
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.use(morgan('tiny'))
app.set(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'client')))


// ! Urls (Start)
app.use('/', indexRouter)
// ! Urls (End)


// Server on port
const port = process.env.PORT || 3005
app.listen(port,
	 err => err 
	? console.log(`Problem on port ${err}`)
	:  console.log(`Server running on ${port} port`))
