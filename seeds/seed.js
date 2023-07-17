const sequelize = require('../config/connection');
const { User, Blog } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const users = await User.bulkCreate(userData, {
//     individualHooks: true,
//     returning: true,
//   });

//   for (const project of blogData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

//   process.exit(0);
// };

const seedAll = async () =>{
    console.log("Before ")
    // await sequelize.sync()//{force: true})
    await sequelize.sync({ force: true });
    console.log('\n******* SEEDING DATABASE *******\n');

    // console.log('\n******* USER INFO *******\n');
    // await userData();

    // console.log('\n******* BLOG INFO *******\n');
    // await blogData();

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
      });

    //await Blog.bulkCreate(blogData);
    for (const blog of blogData) {
        await Blog.create({
          ...blog,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }

    process.exit(0);
};

seedAll();

