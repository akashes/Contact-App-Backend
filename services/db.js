const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/contact-management')

const contact = mongoose.model('contact',{
  id: String,
  name: String,
  username: String,
  phone: String,
  email: String,
  zipcode: String,
  address: String,

})


module.exports={
    contact
}