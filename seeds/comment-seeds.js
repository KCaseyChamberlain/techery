const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is just what I needed!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Happy coding!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'I was just telling John boy about this.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'The new meta for sure buddy.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Old school. Nice!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'All my homies love using this.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'I think this is from the USA?',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'SOOO EASY.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Should have posted this earlier buddy. WOW!',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'Good read!',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'YES!',
    user_id: 3,
    post_id: 14
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
