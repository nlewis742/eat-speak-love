// we need a functioning home page(description of dysphagia and login-if you aren't already), profile page, and forum
//backend: organize database, config, models, routes

const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const authRoutes = require('./controllers/auth/auth');
const helpers = require('./utils/helpers');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// // Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// app.get('/login/google', passport.authenticate('google'));

// app.get('/oauth2/redirect/google',
//   passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
//   function(req, res) {
//     res.redirect('/');
//   });

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(authRoutes);
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
