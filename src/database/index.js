const mongoose = require('mongoose');

mongoose
    .connect(
        process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    ).then(() => {
        console.log("Database connection established");
    })
    .catch(err => {
        console.log("Couldn't connect to database", err);
        process.exit();
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;