// require express
var express = require('express');
// create express app
var app = express();

// require all the other appropriate node modules
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// setting up server
var server = app.listen(8000)

// set up body-parser to parse form data
app.use(bodyParser.urlencoded({extended: true}));

// connect mongoose to mongoDB (userdb is our DB name)
mongoose.connect('mongodb://localhost/userdb');

// use native promises
mongoose.Promise = global.Promise;

// set up flash to display errors to client
const flash = require('express-flash');
app.use(flash());

// set up session 
const session = require('express-session');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    secret: "ThisIsSecret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000}
}));

// set up bcrypt to hash pw
const bcrypt = require('bcrypt-as-promised');

// create mongoose schemas
var userSchema = new mongoose.Schema({
    f_name: {
        type: String, 
        required: [true, 'First Name is required'], 
        minlength: [2, 'First name must be at least 2 characters']
        },
    l_name: {
        type: String, 
        required: [true, 'Last name is required'], 
        minlength: [2, 'Last name must be at lesat 2 characters'],
    },
    birthday: {
        type: Date, 
        required: [true, 'Birthday is required']
    },
    email: {
        type: String, 
        required: [true, 'Email is required'],
        unique: [true, 'This email is already registered! Try logging in!']
    },
    password: {
        type: String, 
        required: [true, 'You must enter a password!'],
        minlength: [5, 'Password must be 5-12 characters!'],
        maxlength: [12, 'Password must be 5-12 characters']
    },
}, {timestamps: true});

var User = mongoose.model('User', userSchema);

// so server can server static content
app.use(express.static(path.join(__dirname, './static')));

// setting up ejs and views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// set root route to render index.ejs
app.get('/', function(req, res){
    res.render('index');
});

// set root route to render index.ejs view
app.get('/', function(req, res){
    res.render('index');
});

// post route to validate and register new user
app.post('/register', function(req, res){
    console.log("POST DATA", req.body);
    
    password = req.body.password;
    pw_conf = req.body.pw_conf;

    if (password != pw_conf){
        console.log("ERROR: passwords do not match");
        // alert("The passwords do not match!");
        res.redirect('/');
    }

    var user = new User({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        birthday: req.body.b_day,
        password: req.body.password
    });

    user.save(function(err){
        if(err){
            console.log("ERROR(S)", err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            };
            // redirect user to root route to display message
            res.redirect('/');
        }
        else{
            // if no errors, hash pw and save user to session and display "Success!" on view file
            bcrypt.hash(req.body.password, 10)
            .then(hashed_pw => {
                user.password = hashed_pw;
            })
            .catch(error => {
                console.log("ERROR SAVING USER TO DB:", error);
                for (var key in error.errors){
                    req.flash('saveError', error.errors[key].message);
                };
            });
            console.log("Succesfully added user!");
            req.session.user_id = user._id;
            alert("Succesfully registered!");
            res.redirect('/sucess');
        }
    });
});


// fix log-in code!!
// app.post('/login', function(req, res){
//     // check if user exists in db and reroute to success if user exists!
//     var valid_user = false;
//     console.log('email: ',req.body.email);
//     // see if email matches any records in db then test pw to see if it matches same record!
//     User.findOne({email: req.body.email}, function(err, user){
//         if(err){
//             console.log(err);
//             res.redirect('/');
//         }else{
//             console.log('Found User in db', user);
//             bcrypt.compare(req.body.password,user.password,function(err,res){
//                 if (res==false){
//                     console.log('Password does not match');
//                     pass_valid(valid_user);
//                 }
//                 else{
//                     console.log('Password and Email match!');
//                     valid_user = true;
//                     pass_valid(valid_user);
//                 }
//             });

//         }
//         //render functions unavailable under bcrypt.compare so called outside after callback executes.
//         //need to display message to user if password was incorrect. Currently no message displayed.
//         function pass_valid(result){
//             if(valid_user==true){
//                 req.session.user_id = user._id;
//                 res.render('success', {user:user});
//             }else{
//                 res.render('index');
//             }
//         }
//     });
// });

// app.get('/success', function(req, res){
//     if (req.session.user_id==null){
//         res.redirect('/');
//     }

//     //get user data from db and pass to success template
//     console.log('session id in /success', req.session.user_id);
//     User.findOne({_id: req.session.user_id}, function(err, user){
//         //assign the id of the message that the new comment belongs to
//         if(err){
//             // console.log(err);
//             console.log('something went wrong in /sucess')
//             res.redirect('/');
//         }else{
//             console.log('Retrieved user: ', user);
//             res.render('success',{user:user});
//         }
//     });

// });


app.get('/logout', function(req, res){
    //clear all session variables
    req.session.destroy();
    res.redirect('/');
})