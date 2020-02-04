const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));

hbs.registerHelper('tableGenerator',(num,hexaColor)=>{
    var str = '';
   str += '<table style="width:40%;height:40%">';
   str += '<tbody>';

    // words = color;
    for(let i=0; i<num; i++){
        var color = ((1<<24)*Math.random()|0).toString(16);
        var color1 = ((1<<24)*Math.random()|0).toString(16);
        var color2 = ((1<<24)*Math.random()|0).toString(16);

        hexaColor = color;
        hexaColor1 = color1;
        hexaColor2 = color2;

        
        str+='<tr><td style="background-color: #'+hexaColor+';">'+hexaColor+'<br/><span style="color:#ffffff">'+hexaColor.toUpperCase()+'</span></td> <td style="background-color: #'+hexaColor1+';">'+hexaColor1+'<br/><span style="color:#ffffff">'+hexaColor1.toUpperCase()+'</span></td> <td style="background-color: #'+hexaColor2+';">'+hexaColor2+'<br/><span style="color:#ffffff">'+hexaColor2.toUpperCase()+'</span></td></tr>';
 
    }

    str += '</tbody>';
    str += '</table>';
   
    
    return new hbs.handlebars.SafeString(str);
})

hbs.registerHelper('error404',(num,errorNum)=>{
    var str = '';   
    for(i=0;i<num; i++){
        str+='<div class="still">';
        str+= errorNum;
        str+='</div>';
        str+='<div class="rotate">';
        str+= errorNum;
        str+='</div>';
        str+='<div class="shrink">';
        str+= errorNum;
        str+='</div>';
    }
    return new hbs.handlebars.SafeString(str);
})

app.post("/result", function(req,res){
    res.render("index", {name:"Jose DLC", selection:req.body.selectNum});
});

//__________________________________________________________________________________

app.get('/', (req, res)=>{
    res.render('index', {name:"Jose DLC"});
});

//________________________________________________________________________________

function rando(req, res, next){
    req.num = Math.round(Math.random()*(50 - 20 + 1)) + 20;
    next();
}

app.use(rando);

//___________________________________________________________________________________

app.get('/*',(req,res)=>{
    res.render('error',{numbo:req.num});
});



// app.get('/animals',(req, res)=>{
//     res.render('index', {name:"Animals", numbo:0});
    
// })

// app.get('/animals/:type/:color',(req, res)=>{
//     res.render('index', {name:req.params.color + " " + req.params.type});
    
// })


app.listen(3000, ()=>{
    console.log('Server is running at http://localhost:3000/');
});





