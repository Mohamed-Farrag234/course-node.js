const {app} = require('./server')
const {adduser} = require('./controllers/adduser')
const {deletuser} = require('./controllers/deleteuser')
const {edituser} = require('./controllers/edituser')
const {login} = require('./controllers/loginbody')



app.post('/adduser', adduser)
app.delete('/deletuser', deletuser)
app.patch('/edituser', edituser)
app.get('/login', login)