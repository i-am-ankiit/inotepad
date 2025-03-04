const connectDB = require('./db');
const express = require('express')
connectDB();

const app = express()
const port = 5000

app.use(express.json());


//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})