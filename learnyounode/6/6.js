var mod = require('./mod.js');

mod(process.argv[2], process.argv[3], function(err, data){
  if(err){
    console.log(err);
  }else{
    data.forEach(function(i){
      console.log(i);
    });
  }
});
