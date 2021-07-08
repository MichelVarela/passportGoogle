const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/* ************************ */
/* el serializado se realiza luego de obtener los datos y guardarlos en la funcion callback de la linea 15, devuelve un RETURN DONE(NULL,PROFILE) que va a ser utilizado en el serializeUser() */
/* passport.serializeUser();

passport.deserializeUser(); */
/* al deserealizado le pasamos un id desde el serializer, este mismo lo utilizaremos para identificar al usuario en la bd y tomar sus datos */
/* ************************ */

passport.use( new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/users/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => { /* callback function, devuelve la informacion del usuario */
    console.log('callback function de passport')
    console.log(profile) /* datos de usuario de google */
    
}));