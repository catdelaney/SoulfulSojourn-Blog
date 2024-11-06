const User = require('./user');
const blogPosts = require('./blog');
const Comment = require('./Comment');

User.hasMany(blogPosts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

blogPosts.belongsTo(User, {
  foreignKey: 'user_id'
});

blogPosts.hasMany(Comment, {
  foreignKey: 'blog_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, blogPosts, Comment };
