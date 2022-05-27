const mongoose = require('mongoose')

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}
/*const connectDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/mernProjectEcommerce-master', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`)
    })
}*/

mongodb: module.exports = connectDatabase