/* Losjes gebaseerd op https://socket.io/get-started/chat */

import * as path from 'path'
import { createServer } from 'http'
import express, { response } from 'express'


const app = express()
const http = createServer(app)



const port = process.env.PORT || 8000
// const apiUrl = 'https://whois.fdnd.nl/api/v1/squad?id=cldcspecf0z0o0bw59l8bwqim'


// Serveer client-side bestanden
app.use(express.static(path.resolve('public')))


// view engine
app.set('view engine', 'ejs')
app.set('views', './views')

// hoe json gebruikt moet worden
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// ROUTES
// Route voor index
app.get('/', (request, response) => {
    response.render('interceptor-homepage')
})

// Route voor interceptors
app.get('/interceptor-001', (request, response) => {
    response.render('interceptor-001')
})

app.get('/interceptor-002', (request, response) => {
    response.render('interceptor-002')
})

app.get('/interceptor-003', (request, response) => {
    response.render('interceptor-003')
})

app.get('/interceptor-004', (request, response) => {
    response.render('interceptor-004')
})

app.get('/interceptor-005', (request, response) => {
    response.render('interceptor-005')
})

app.get('/interceptor-006', (request, response) => {
    response.render('interceptor-006')
})

app.get('/interceptor-007', (request, response) => {
    response.render('interceptor-007')
})

app.get('/interceptor-008', (request, response) => {
    response.render('interceptor-008')
})

app.get('/interceptor-009', (request, response) => {
    response.render('interceptor-009')
})

app.get('/interceptor-010', (request, response) => {
    response.render('interceptor-010')
})


// Start een http server op het ingestelde poortnummer en log de url
http.listen(port, () => {
  console.log('listening on http://localhost:' + port)
})
