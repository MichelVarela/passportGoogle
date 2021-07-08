require('dotenv').config()
const express = require('express');
const app = express();

const PORT = 3000;

/* passport */
const passport = require('passport');
const passportSetup = require('./config/passport-setup');/* lo requerimos para la peticion en la linea 23 */

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

/* passport initialize() */
app.use(passport.initialize());
app.use(passport.session());/* req.session.passport.user para poder llamar a la session creada por passport */

/* RUTAS */
app.get('/', (req,res) => {
    res.render('index');
})

/* primer parametro de passport.authenticate() nombre de la Strategy aplicada, segundo parametro los datos que queremos tomar delimitados en el scope */
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}))/* ruta para ingresar con login google */

app.get('/users/auth/google/callback', passport.authenticate('google'),(req,res) => {
    res.send('usuario registrado con exito')/* datos recibidos en la ruta declarada en el callback Url */
})

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));