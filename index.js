const app = require('./app')
const {port} = require('./config')

app.listen(port,(error)=>{
    if(error){
        console.log("error creating server")
        return null;
    }else{
        console.log("server run on port "+port)
    }
})