const queryplace = async (text)=>{
    var result = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${text}&key=AIzaSyDSEWBYty4uKrhylK8VCwENeq0T868hawY&fields=formatted_address,name,rating,opening_hours,geometry`)
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      console.error(error);
    });

    result=await cleandata(result); 
    return result
}

const cleandata=async (data)=>{
    var result = [];
    if(Object.keys(data.results).length == 0){
        return null;
    }
    for(var k in await data.results) {
        result.push({
            name : data.results[k].name,
            location:data.results[k].geometry.location,
            formatted_address : data.results[k].formatted_address
        })
        if(k >5){
            return result
        }

     }
   
}

export {queryplace}
//Xxxxxxxxxxx