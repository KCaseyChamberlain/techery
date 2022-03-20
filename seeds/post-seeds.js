const { Post } = require('../models');

const postdata = [
  {
    title: 'SQL Tutorial',
    post_url: 'https://www.w3schools.com/sql/',
    user_id: 10
  },
  {
    title: 'JavaScript Tutorial',
    post_url: 'https://www.w3schools.com/js/default.asp',
    user_id: 8
  },
  {
    title: 'HTML Tutorial',
    post_url: 'https://www.w3schools.com/html/default.asp',
    user_id: 1
  },
  {
    title: 'Array.prototype.reverse()',
    post_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
    user_id: 4
  },
  {
    title: 'CSS Layout - Horizontal & Vertical Align',
    post_url: 'https://www.w3schools.com/css/css_align.asp',
    user_id: 7
  },
  {
    title: 'How to Download Bootstrap',
    post_url: 'https://getbootstrap.com/docs/5.1/getting-started/download/',
    user_id: 4
  },
  {
    title: 'HTML Semantic Elements',
    post_url: 'https://www.w3schools.com/html/html5_semantic_elements.asp',
    user_id: 1
  },
  {
    title: 'HTML class Attribute',
    post_url: 'https://www.w3schools.com/html/html_classes.asp',
    user_id: 1
  },
  {
    title: 'JavaScript For Loop',
    post_url: 'https://www.w3schools.com/js/js_loop_for.asp',
    user_id: 9
  },
  {
    title: 'JavaScript Booleans',
    post_url: 'https://www.w3schools.com/js/js_booleans.asp',
    user_id: 5
  },
  {
    title: 'CSS Box Model',
    post_url: 'https://www.w3schools.com/css/css_boxmodel.asp',
    user_id: 3
  },
  {
    title: 'JavaScript Switch Statement',
    post_url: 'https://www.w3schools.com/js/js_switch.asp',
    user_id: 10
  },
  {
    title: 'How to Remove Origin From Git Repository',
    post_url: 'https://stackoverflow.com/questions/9224754/how-to-remove-origin-from-git-repository',
    user_id: 8
  },
  {
    title: 'Sequelize ORM',
    post_url: 'https://sequelize.org/',
    user_id: 3
  },
  {
    title: 'Express/Node introduction',
    post_url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction',
    user_id: 3
  },
  {
    title: 'Bulma: The Modern CSS Framework That Just Works',
    post_url: 'https://bulma.io/',
    user_id: 7
  },
  {
    title: 'Popular APIs',
    post_url: 'https://rapidapi.com/collection/popular-apis',
    user_id: 6
  },
  {
    title: 'CSS Syntax',
    post_url: 'https://www.w3schools.com/css/css_syntax.asp',
    user_id: 4
  },
  {
    title: 'Using Emojis in HTML',
    post_url: 'https://www.w3schools.com/html/html_emojis.asp',
    user_id: 6
  },
  {
    title: 'JavaScript Random',
    post_url: 'https://www.w3schools.com/js/js_random.asp',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
