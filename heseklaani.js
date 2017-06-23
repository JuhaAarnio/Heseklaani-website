var express =require('express');
var app = express();
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app('port', process.env.PORT || port);


app.get('/', funtion(req, res){
	res.render('paasivu');
});

app.use(function(req, res){
	res.type(text/plain);
	res.status(404);
	res.send('404 - Burgerit kadonneet');
});
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Servu poksuu');
});
app.listen(app.get('port'), function(){
	console.log('servu pyörii osoiteessa +' ip, port + '; Lopeta painamalla Ctrl-C');
});

 
