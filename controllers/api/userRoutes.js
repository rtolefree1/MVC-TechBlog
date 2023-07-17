const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/blog', async (req, res) => {
  try {
      console.log("UserId: ", req.session.user_id)
    
      const dbUserData = await Blog.create({
        nameOfBlog: req.body.name_of_blog,
        blogComments: req.body.blog_comments,
        user_id: req.session.user_id     
  })

    // console.log('User ID: ', req.session.user_id);
    // console.log("IN BLOG BACKEND");

    // const userId  = req.session.user_id;

    // console.log("User id: ", userId)
    // console.log("body: ", req.body)
    // req.session.save(() => {
    //   req.session.user_id = userData.id;
    //   req.session.loggedIn = true;

    //   res.status(200).json(userData);
    // });

    // if(!userId){
    //   return res.status(400).json({error: 'The id is required to update blog post'})
    // }

    // const blogUserID = await Blog.findByPk(user_id);
    // console.log('User ID: ', blogUserID);

    // const blogData = await Blog.update(req.body,{
    //   where:{
    //     user_id: userId,
    //   }
    // });

    // console.log('Blog Data: ', blogData)
    // req.session.save(() => {
    //   req.session.user_id = blogData.id;
    //   req.session.loggedIn = true;

    //   res.status(200).json(blogData);
    // });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    
    console.log('******ID*********', userData.id);
    console.log('******NAME*********', userData.name);
    console.log('******EMAIL*********', userData.email);
    console.log('******PASSWORD*********', userData.password);
    console.log('*******USERDATA******* :',userData);

    
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
  
    console.log("PASSWORD:", validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    req.session.save(() => {
      console.log("****Saving password session*************")
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      console.log("session value:",req.session.loggedIn)
      console.log('You are now logged in!')
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// CREATE new user
router.post('/register', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
  
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


router.get('/usersInfo', async (req, res) =>{
    console.log("**********GETTING ALL USER INFO**********")
    try{
        console.log("**********GETTING ALL USER INFO**********")
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    }catch(err){
        res.status(500).json(err);
    }
})

router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session

  console.log("logging out, session", req.session.loggedIn)
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



// /api/users/Comments; adding new comment to current post
router.post('/comments', async (req, res) => {
  console.log('session name', req.session.name);
  console.log('sesson password: ', req.session.password)
  console.log('comments: ', req.body.blogComments)
  try {
    const commentData = await User.create({
      name: req.session.name,
      email: req.session.email,
      password: req.session.password,
      blogComments: req.body.blogComments,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(commentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// const router = require('express').Router();
// const { User } = require('../../models');

// router.post('/login', async (req, res)=>{

//     console.log("***********Logging into Database***********");
//     try{
//         const userData = await User.findOne({where: {username: req.body.username}});
//         if(!userData)
//         {
//             res
//                 .status(400)
//                 .json({message: 'Incorrect email or password, please try again'});
//                 return;
//         }
//         const validPassword = await userData.checkPassword(req.body.password);
//         if(!validPassword)
//         {
//             res.status(400).json({message: 'Incorrect email or password, please try again'});
//         }

//         req.session.save( ()=> {
//             req.session.user_id = userData.isSoftDeleted;
//             req.session.logged_in = true;


//             res.json({user: userData, message: 'You are logged in!'})
//         });

//     }catch(err){
//         res.status(400).json(err);
//     }
// });
module.exports = router;