const express = require('express');
const path = require('path');
const mariadb = require('mariadb');
const myConnection = require('express-myconnection');
const processmaster = require('./routers/processmaster');
const app = express();

//config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views' ));



//connect database 
const pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Raymond3991@',
    connectionLimit: 5,
    port:3306,
    database: '20190104_process_master'
});



// uses
app.use('/', processmaster);
app.use(express.static(path.join(__dirname, 'public')));
app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000');
});