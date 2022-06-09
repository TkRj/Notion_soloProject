const BASE_URL="http://localhost:3001/entries";

function postEntry (entry){

  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(entry),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
}

function getAllEntries(){
return fetch(BASE_URL,{
  method:"GET",

})
  .then(res=>res.json())
  .catch(error=>console.log(error))
}




module.exports= {postEntry,getAllEntries};