const mongoose = require('mongoose');
// Allow Promises
mongoose.Promise = global.Promise;
// Connection
const url = 'mongodb+srv://bhuvan12:bbbb@123@cluster0.9gpf85h.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(
    url, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
)
// mongoose.connect(url, { useNewUrlParser: true });
// Validation
mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.log('Error with the database!', err));