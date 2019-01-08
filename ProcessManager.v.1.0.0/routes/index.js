var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mariadb = require('mariadb');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));
router.use(express.static('public'));






/* GET home page. */

var dummy = [{
   pCode:"1000",
   pName:"martin"
},{
    pCode:"2000",
    pName:"spicy"
}];

// GET METHOD

router.get('/', function(req, res, next) {
    res.render('index',{data:dummy});
});

router.get('/search_process', function(req, res, next) {
    res.render('index');
});

router.get('/create_new_process', function(req, res, next) {
    res.render('new_process.ejs',);
});

router.get('/edit_process', function(req, res, next) {
    res.render('edit_process.ejs');
});


// POST METHOD

router.post('/create_new_process/submit_process', function(req, res, next) {
    var input = req.body;

    for(var i in dummy){
        if(input.pCode = dummy[i].pCode){
            console.log(input.pCode);
            console.log(dummy[i].pCode);
        }else{
            dummy.push(req.body);
        }
    }
    res.redirect('/');
});


router.get('/edit_process/update_process', function(req, res, next) {
    res.render('index.ejs',);
});

router.post('/edit_process/delete_process', function(req, res, next) {
    dummy.delete(req.body);
    res.redirect('/');
});


/**
router.post('/EditProcess/Updateprocess', function (req, res) {
    req.getConnection()
        .then(connect => {
            connect.query('SELECT * FROM process_master', function (err, result) {
                if(err) throw err;
                console.log('valeur afficher')
            })
        })
} )
**/

const Pool = mariadb.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Raymond3991@',
    connectionLimit: 5,
    database: '20190104_process_master'
});

Pool.getConnection();


module.exports = router;
