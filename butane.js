const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


let gueVal = 0;
let Guessnum = 0;
let a=Math.floor(Math.random()*100+1);
let str = "Guess The Number";
app.get("/", function(req, res) {
  res.render("home", {
    Guessnum:gueVal
  });
});

app.get("/DICEE", function(req, res) {
  res.render("DICEE");
});

app.get("/GUESS_NUMBER", function(req, res) {
  str = "Guess The Number";
  gueVal = 0;
  a=Math.floor(Math.random()*100+1);
  res.render("GUESS_NUMBER", {
    gueVal:gueVal,
    a:a,
    str:str
  });
});

app.post("/GUESS_NUMBER", function(req, res) {
  let val = parseInt(req.body.num[0]);

  if (val > a) {
    gueVal ++;
    str = "Decrese Your Number";
  }
  else if (val < a) {
    gueVal ++;
    str = "Increse Your Number";
  }
  else {
    gueVal ++;
    if (gueVal < Guessnum) {
      Guessnum = gueVal;
    }
    str = "Conguratulations, You took " + gueVal + " attempts";
  }
  res.render("GUESS_NUMBER", {
    gueVal:val,
    a:a,
    str:str
  });

});

app.get("/ABOUT", function(req, res) {
  res.render("ABOUT");
});

app.listen(3000, function() {
  console.log("Hosting");
});
