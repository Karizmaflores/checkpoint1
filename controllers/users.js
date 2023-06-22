const userData = require('../data/index');
const sampleUser = require('../data/sampleUser');

const { v4: uuidv4 } = require('uuid');

let users = [...userData];

const list = (req, res) => {
  res.json(users);
};

const show = (req, res) => {
  const {id} = req.params.id;
  const user = users.find(user => user.id === Number(id));

  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const create = (req, res) => {
  const {body} = {...sampleUser};
  newUser.id = uuidv4();
  users.push(body);
  res.json(body);
};

const update = (req, res) => {
  const id = req.params;
  const updates = req.body;
  const user = users.find(user => user.id === Number(id));
  const userIndex = users.findIndex((user) => user.id === Number(id));

  const updatedUser = {
      ...user,
      ...updates,
  }

  users.splice(userIndex, 1, updatedUser);
  console.log(updatedUser);
  console.log(userIndex);

  if (user) {
    user.name = req.body.name || user.name;
    user.age = req.body.age || user.age;
    res.json(user);
  } else {
    res.sendStatus(400);
  }
};

const deleteUser = (req, res) => {
  const id = req.params;
  const userIndex = users.findIndex(user => user.id === Number(id));

  if (index !== -1) {
    users.splice(userIndex, 1);
    // success message
    res.sendStatus(204);
  } else {
    // fail error
    res.sendStatus(400);
  }
};

module.exports = {
  list,
  show,
  create,
  update,
  deleteUser,
};
