
var expressJS=require('express');
var server=expressJS();
server.get('/',function(request,response){
  response.send('Hello World !');
});

server.listen(3000, function(){
  console.log('Server is ready!!');
});
