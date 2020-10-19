const express = require('express');
const app = express();
const port = 8080;
// app.use(cors());

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

  app.get('/sum',function(req,res){
    function factorial(n){
        if(n == 0 || n == 1){
            return 1;
        }else{
            return n * factorial(n-1);
        }
    }
    var x=factorial(Number(req.query.first));
    var y=factorial(Number(req.query.sec));
    var c;
    c=x+y;
    response = {
        result: c  
    };
    res.end(JSON.stringify(response));
}
);

  app.listen(port,()=>{
    console.log("running on port "+port)
  })  