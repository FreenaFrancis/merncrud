const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = 8000;
const userModel = require('./models/user');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/merncrud", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.post('/post', (req, res) => {
  userModel.create(req.body)
    .then(createdUser => {
      console.log(createdUser);
      res.json(createdUser);
    })
    .catch(err => console.error(err));
});

app.get('/getuser', (req, res) => {
  userModel.find()
    .then(users => {
      console.log(users);
      res.json(users);
    })
    .catch(err => console.error(err));
});

app.delete('/deleteuser/:id', (req, res) => {
  const { id } = req.params; // Use req.params to get the parameter from the URL
  userModel.findByIdAndDelete({ _id: id })
    .then(deletedUser => {
      console.log(deletedUser);
      res.json(deletedUser);
    })
    .catch(err => console.error(err));
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params; // Use req.params to get the parameter from the URL
  userModel.findByIdAndUpdate({ _id: id }, { name: req.body.name, place: req.body.place })
    .then(updatedUser => {
      console.log(updatedUser);
      res.json(updatedUser);
    })
    .catch(err => console.error(err));
});

app.get('/getUserById/:id', (req, res) => {
  const { id } = req.params;
  userModel.findById({ _id: id })  // Corrected this line
    .then((user) => {
      console.log(user);
      res.json(user);
    })
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log('Server is running on port', port);
});


app.put('updateUser/:id',(req,res)=>{

  const updateUUser=userModel.findByIdAndUpdate({_id:id})
  .then((res)=>{
res.json(updateUUser)
  })
  .catch((err)=>{
    console.log(err);
  })
})