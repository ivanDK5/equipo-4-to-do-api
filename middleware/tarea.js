const mongoose=require('mongoose');
const Tarea=mongoose.model('Tarea');

module.exports=(req,res,next)=>{ 
  if(req.query){
    let band=[];
      console.log(req.query);
      
      for(field in req.query){
        band.push(Tarea.isFiltersAllowed(field));
        
      }
      if(!band.includes(false)){
       
       return next()
      }else{
        return res.status(400).send({
          status:"400",
          type:"Bad request",
          msj:"Filter its not supported by this endpoint",
          filters:`Filters allowed are: ${Tarea.filtersAllowed().toString()}`
        })
      }
  }else{
   return next()
  }
  
}