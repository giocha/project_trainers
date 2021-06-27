// ! Requires (Start)
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const _ = require('debug')('_ route_'+path.basename(__filename,path.extname(__filename)) + ' =>   ')

// ? Routers (Start)
const indexRouter = require('./routes/index')
<<<<<<< HEAD
// const trainerRouter = require('./routes/trainer')

=======
const trainerRouter = require('./routes/trainer')
>>>>>>> f06fb7e81a75ac50db2856a0378e319cb66b72fb
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
<<<<<<< HEAD
// app.use('/trainers', trainerRouter)

=======
app.use('/trainers', trainerRouter)
>>>>>>> f06fb7e81a75ac50db2856a0378e319cb66b72fb
// ! Urls (End)


// Server on port
const port = process.env.PORT || 3005
app.listen(port,
	 err => err 
	? `Problem on port ${err}`
	:  _(`Server running on ${port} port`))
