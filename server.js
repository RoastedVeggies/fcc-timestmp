// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/:date", (req,res)=>{
  var date = new Date(req.params.date);
  if(date == 'Invalid Date'){
     date = new Date((req.params.date)*1000); 
  }
  console.log(date);
  //correct unix date is found by multiplying by 1000
  //var date = new Date((req.params.date)*1000);
   if(date > 0){ 
    var natural = month(date.getMonth())+' '+date.getDate()+', '+date.getFullYear();
    res.send({unix:(date.getTime())/1000,natural:natural})
   }else{
    res.send({unix:null, natural:null}); 
   }
})

function month(i){
  switch(i){
    case 0:
      return "Janurary"
      break;
    case 1:
      return "February"
      break;
    case 2:
      return "March"
      break;
    case 3:
      return "April"
      break;
    case 4:
      return "May"
      break;
    case 5:
      return "June"
      break;
    case 6:
      return "July"
      break;
    case 7:
      return "August"
      break;
    case 8:
      return "September"
      break;
    case 9:
      return "October"
      break;
    case 10:
      return "November"
      break;
    case 11:
      return "December"
      break;
  }
}


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
