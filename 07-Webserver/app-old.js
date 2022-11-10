const http = require('http');

http.createServer( (req,res) =>{

//res.writeHead(200,{ 'Content-Type': 'application/json'});
//res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
//res.writeHead(200,{ 'Content-Type': 'application/csv'});


res.write ('Hello W');
res.end();
//res.write ('1, Antonela\n');
//res.write ('2, Rodrigo\n');
//res.write ('3, Evelia\n');
//res.write ('4, Diego\n');



})

.listen(8080);

console.log('Listen music', 8080);
