const router = require('express').Router();
const {  User, Blog } = require('../models');


//console.log('Arrived in the Before homeRoutes.js file');

router.get('/',async (req, res) => {
    console.log('Arrived in the root method, homeRoutes file');
    try{
        console.log('login session', req.session.loggedIn)
       // req.sesson.loggedIn,
       const blogData = await Blog.findAll({
        include: [
            {
            model: User,
            attributes: ['name'],
            },
        ],

       });
      
       const blogs = blogData.map((blog) => blog.get({plain: true}))
       console.log('blogs data', blogs) 
       res.render('login',{
            blogs,
            loggedIn: req.session.loggedIn

        });
      //  res.render('login')
    
    }catch(err){
        res.status(500).json(err);
    }
})
// ORIG
// router.get('/home',(req, res) => {
//     console.log('Arrived in the /home method, homeRoutes.js file');
//     try{
//         if(req.session.loggedIn){
//             res.render('homepage');
//             return;
//         }
//         res.render('login');
    
//     }catch(err){
//         res.status(500).json(err);
//     }
// })

router.get('/home', async (req, res) => 
{
    console.log('Arrived in the /home method, homeRoutes.js file');
    
    try
    {
        console.log('login session', req.session.loggedIn)
       // req.sesson.loggedIn,
       const blogData = await Blog.findAll
       ({
            include: 
                [
                    {
                    model: User,
                    attributes: ['name'],
                    },
                ],

        })
      
       const blogs = blogData.map((blog) => blog.get({plain: true}))
       console.log('blogs data', blogs) 
       
       res.render('homepage',
       {
            blogs,
            loggedIn: req.session.loggedIn,
            email: req.session.email

        });
        }catch(err){
            res.status(500).json(err);
        }
    });

    
    
    // try{
    //     if(req.session.loggedIn){
    //         res.render('homepage',{
    //             loggedIn:req.session.loggedIn
    //         });
    //         return;
    //     }
    //     res.render('homepage');
        // res.render('login');
    
    // }catch(err){
    //     res.status(500).json(err);
    // }
// })

router.get('/login', (req, res)=>{
    console.log('Am i logged in?', req.session.loggedIn)
    console.log('Arrived in the /login method, homeRoutes.js file');
    try{
    if(req.session.loggedIn){
        res.render('alreadyLogin');
        return;
    }
    req.session.loggedIn = false;
    res.render('login',{loggedIn:req.session.loggedIn});
}catch(err){
    res.status(500).json(err);
}

});

router.get('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const blog = blogData.get({ plain: true });
  
      res.render('blog', {
        ...blog,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// router.get('/logout', (req, res)=>{
//     console.log('Arrived in the /logout method, homeRoutes.js file');
//     if(req.session.loggedIn){
//         res.redirect('/api/users/logout');
//         return;
//     }
//     res.render('login');

// });

router.get('/Dashboard', async (req, res)=>{
    
    console.log('Arrived in the /Dashboard method, homeRoutes.js file');
    // try{

      const blogData = await Blog.findAll({
        where:{user_id: req.session.user_id}
      });
      const blogs = blogData.map((blog) => blog.get({plain: true}))
      console.log("id: ", req.session.user_id);
      console.log("Blog Data", blogData);
    //   const userData = await User.findOne({ where: { email: req.body.email } });
    
    //   console.log('#######ID*********', userData.id);
    //   console.log('#######NAME*********', userData.name);
    //   console.log('#######EMAIL*********', userData.email);
    //   console.log('#######PASSWORD*********', userData.password);
    //   console.log('#######USERDATA******* :',userData);

      // const blogData = await Blog.findByPk(req.session.id, {
      //   include: [
      //     {
      //       model: User,
      //       attributes: ['name'],
      //     },
      //   ],
      // });
      // console.log('########',blogData)
      // const blog = blogData.get({ plain: true });
      // console.log('blog info',blog)
      res.render('Dashboard', {blogs, loggedIn:req.session.loggedIn});
    // }
    // catch(err){
    //   res.status(500).json(err)
    // }

  });

router.get('/register', (req, res)=>{
    req.session.loggedIn = false;
    res.render('register',{loggedIn:req.session.loggedIn});
})

router.get('/comments', async (req, res) => {
    try {
      const singleBlogData = await Blog.findByPk(req.session.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const userBlog = singleBlogData.get({ plain: true });
      console.log('userBlog: ', userBlog)
    //   res.render('blog', {
    //     ...blog,
    //     loggedIn: req.session.loggedIn
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;