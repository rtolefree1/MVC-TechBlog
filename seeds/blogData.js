const {Blog} = require('../models');

const blogData =[
    {
        nameOfBlog: 'Testing Blog',
        blogComments: 'Comments in this blog. Just adding some data'

    },
    {
        nameOfBlog: 'Testing Blog2',
        blogComments: 'Comments in this blog. Just adding some data2'

    }
];

const blogComments = () => Blog.bulkCreate(blogData);

module.exports = blogComments;