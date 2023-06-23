const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

const { v4: uuidv4 } = require('uuid');

const list = (req, res) => {
  res.json(users);
};

const show = (req, res) => {
  const {id} = req.params;
  const foundUser = users.find(user => user.id === Number(id));

  if (foundUser) {
    res.json(foundUser);
  } else {
    res.sendStatus(404);
  }
};

const create = (req, res) => {
  const {body} = [...sampleUser];

  const newUser = {
    "id": uuidv4(),
    ...body,
  }
  users.push(newUser);
  res.json(newUser);
};

const update = (req, res) => {
  const {id} = req.params;
  const updates = req.body;
  const user = users.find(user => user.id === Number(id));
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex) {
    user.name = updates.name || user.name;
    user.age = updates.age || user.age;
    res.json(user);
  } else {
    res.sendStatus(400);
  }
};

const deleteUser = (req, res) => {
  const {id} = req.params;
  const userIndex = users.findIndex(user => user.id === Number(id));

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.sendStatus(204);
  } else {

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
