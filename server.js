var express = require('express');
var app = express();

app.listen(3000,function(err){
  if(err){
    console.log(err);
  } else{
    console.log('Server listening on port 3000');
  }
});


app.get('/',function(req,res){
  res.json({
    'ipaddress' : req.ip,
    'language': req.headers["accept-language"].split(',')[0],
    'software' : req.headers['user-agent'].split(') ')[0].split(' (')[1]
  })
});
