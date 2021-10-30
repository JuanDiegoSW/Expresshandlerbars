const express =  require('express')
const exphbs = require('express-handlebars')
const path =  require('path')
const methodOverride = require('method-override');


const app = express()

//configuraciones
app.set('port',process.env.PORT || 4000)
app.set('views', path.join(__dirname,'views'))


app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'/layouts'),
    partialsDir: path.join(app.get('views'),'/partials'),
    extname: '.hbs'
}));

app.set('view engine','.hbs');

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


//routes

app.use(require('./routes/index.route'));
app.use(require('./routes/elements.route'));
app.use(require('./routes/generic.route'));


/*
app.get('/',(req,ress) =>{
    ress.render('index')
});*/


module.exports = app;