const router = require('express').Router();
const {  User } = require('../models');


//console.log('Arrived in the Before homeRoutes.js file');

router.get('/',(req, res) => {
    console.log('Arrived in the root method, homeRoutes file');
    try{
        
        res.render('login');
    
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/home',(req, res) => {
    console.log('Arrived in the /home method, homeRoutes.js file');
    try{
        if(req.session.loggedIn){
            res.render('homepage');
            return;
        }
        res.render('login');
    
    }catch(err){
        res.status(500).json(err);
    }
})

router.get('/login', (req, res)=>{
    console.log('Am i logged in?', req.session.loggedIn)
    console.log('Arrived in the /login method, homeRoutes.js file');
    try{
    if(req.session.loggedIn){
        res.render('alreadyLogin');
        return;
    }

    res.render('login');
}catch(err){
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

router.get('/Dashboard', (req, res)=>{
    console.log('Arrived in the /Dashboard method, homeRoutes.js file');
    try{
    if(req.session.loggedIn){
        console.log("**********DISPLAY DASHBOARD***************", req.session.loggedIn)
        res.render('Dashboard');
        return;
    }
    res.render('login');
}catch(err){
    res.status(500).json(err)
}

});

router.get('/register', (req, res)=>{
    res.render('register');
})

// router.get('/', async (req, res) =>{
//     console.log("**********GETTING ALL USER INFO**********")
//     try{
//         console.log("**********GETTING ALL USER INFO**********")
//         const allUsers = await User.findAll();
//         res.status(200).json(allUsers);
//     }catch(err){
//         res.status(500).json(err);
//     }
// })

//###################TESTING#######################
// router.post('/login', async (req, res) => {
//     try {
//       const userData = await User.findOne({ where: { email: req.body.email } });
//       console.log('*******USERDATA******* :',userData);
//       if (!userData) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
  
//       const validPassword = await userData.checkPassword(req.body.password);
  
//       if (!validPassword) {
//         res
//           .status(400)
//           .json({ message: 'Incorrect email or password, please try again' });
//         return;
//       }
  
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
        
//         res.json({ user: userData, message: 'You are now logged in!' });
//       });
  
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


module.exports = router;