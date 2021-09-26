const mongoose=require('mongoose');
const Usuario=mongoose.model('Usuario');

module.exports=(req,res,next)=>{ 
  if(req.query){
    let band=[];
      console.log(req.query);
      
      for(field in req.query){
        band.push(Usuario.isFiltersAllowed(field));
        
      }
      if(!band.includes(false)){
       
       return next()
      }else{
        return res.status(400).send({
          status:"400",
          type:"Bad request",
          msj:"Filter its not supported by this endpoint",
          filters:`Filters allowed are: ${Usuario.filtersAllowed().toString()}`
        })
      }
  }else{
   return next()
  }
  
}

