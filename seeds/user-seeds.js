const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'beyonce',
    email: 'beyonce@email.com',
    password: 'password123'
  },
  {
    username: 'frankocean',
    email: 'frankie@gmail.com',
    password: 'password123'
  },
  {
    username: 'taylorswift',
    email: 'ihatekanye@gmail.com',
    password: 'password123'
  },
  {
    username: 'kanyeweeezy',
    email: 'ye@gmail.com',
    password: 'password123'
  },
  {
    username: 'petedavids',
    email: 'ilikekanyeswife@email.com',
    password: 'password123'
  },
  {
    username: 'jcole',
    email: 'theneighborsman@gmail.com',
    password: 'password123'
  },
  {
    username: 'weezy',
    email: 'amilli@gmail.com',
    password: 'password123'
  },
  {
    username: 'justibeebs',
    email: 'beiberrrrr@gmail.com',
    password: 'password123'
  },
  {
    username: 'luda',
    email: 'fasterandfurious@gmail.com',
    password: 'password123'
  },
  {
    username: 'kidcudi',
    email: 'daynnite@yahoo.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
