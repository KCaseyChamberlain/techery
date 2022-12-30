const { Post } = require('../models');

const postdata = [
  {
    title: 'SQL Tutorial',
    post_content: 'lorem',
    user_id: 10
  },
  {
    title: 'JavaScript Tutorial',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 8
  },
  {
    title: 'HTML Tutorial',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 1
  },
  {
    title: 'Dancing Llamas',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 4
  },
  {
    title: 'CSS Layout - Horizontal & Vertical Align',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 7
  },
  {
    title: 'How to Download Bootstrap',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 4
  },
  {
    title: 'HTML Semantic Elements',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 1
  },
  {
    title: 'HTML class Attribute',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 1
  },
  {
    title: 'JavaScript For Loop',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 9
  },
  {
    title: 'JavaScript Booleans',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 5
  },
  {
    title: 'CSS Box Model',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 3
  },
  {
    title: 'JavaScript Switch Statement',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 10
  },
  {
    title: 'How to Remove Origin From Git Repository',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 8
  },
  {
    title: 'Sequelize ORM',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 3
  },
  {
    title: 'Express/Node introduction',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 3
  },
  {
    title: 'Bulma: The Modern CSS Framework That Just Works',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 7
  },
  {
    title: 'Popular APIs',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 6
  },
  {
    title: 'CSS Syntax',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 4
  },
  {
    title: 'Using Emojis in HTML',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 6
  },
  {
    title: 'JavaScript Random',
    post_content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nulla expedita delectus iste? Eligendi ipsa ratione magni molestiae et quae, libero aut cum nulla, aspernatur qui ipsam pariatur debitis aliquid.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
