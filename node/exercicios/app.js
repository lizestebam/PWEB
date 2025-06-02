let express = require('express');
let app = express();
let texto = require("./modulo1")
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    res.render("/home/index");
});
app.get('/formulario_adicionar_usuario', function(req, res){
    res.render("/admin/adicionar_usuario");
});
app.get('/historia', function(req, res){
    res.render("informacao/historia");
});
app.get('/cursos', function(req, res){
    res.render('informacao/cursos');
});
app.get('/professores', function(req, res){
    res.render('informacao/professores');
});
app.get('/munari', function(req, res){
    res.render('informacao/munari');
});
app.listen(3000, function(){
    console.log(texto);
});
