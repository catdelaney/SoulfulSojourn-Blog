const user = require('./user');
const blogPosts = require('./blogs');

User.hasMany(blogPosts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

blogPosts.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, blogPosts };
