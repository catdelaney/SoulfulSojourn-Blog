const User = require('./user');
const blogPosts = require('./blog');

User.hasMany(blogPosts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

blogPosts.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, blogPosts };
