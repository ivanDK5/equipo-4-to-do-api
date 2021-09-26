const mongoose=require('mongoose');
const Usuario=mongoose.model('Usuario');

module.exports=(req,res,next)=>{ 
  if(req.query){
    let band=[];
      
      for(field in req.query){
        band.push(Usuario.filtersAllowed(field));
        
      }
      if(!band.includes(false)){
       
       return next()
      }else{
        return res.status(400).send({
          status:"400",
          type:"Bad request",
          msj:"Filter its not supported by this endpoint",
        })
      }
  }else{
   return next()
  }
  
}

