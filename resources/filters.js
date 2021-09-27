function filters(filter,query){ console.log('filters');
let band=[];  
let i=0;
    let obj={}
      console.log(query);
      keys=Object.entries(query);
      for(field in query){
        band.push(filter(field));
        console.log('property ',field);  
        if(field!=='limit')
        obj[i]={'$match':Object.fromEntries([keys[i]])}
        else{
          obj[i]={'$limit':Number.parseInt(Object.fromEntries([keys[i]])[field])}
        }    
        i++; 
      }
      return Object.values(obj);
}

module.exports={
  filters
}