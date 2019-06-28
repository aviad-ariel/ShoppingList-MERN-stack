const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

//models
const items = require('./routes/api/items');


const app = express();

app.use(bodyParser.json());

// DB
const db = require('./config/keys').mongoURI;

// DB connection
mongoose
 .connect(db)
 .then( () => console.log("DB is connected"))
 .catch(ree => console.log(err));

//Routes
app.use('/api/items', items);


//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${ port }`));
