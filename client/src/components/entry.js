import {updateFav,deleteEntry} from '../utils/services'

const Entry = ({entry,setEntries}) => {

  let id = entry._id;

  function updateEntries(promise){

   promise.then(data=>{
    setEntries(data);
  }).catch(err=>{
    console.log('Update or delete error',err);
  })
  }


  return (
    <div className='entry-box'>

    {entry.title},<br></br>
    {entry.date},<br></br>
    {entry.entry}<br></br>
    <br></br>


    <button className="favButton" onClick={(e)=>{updateEntries(updateFav(id))}} >Fav</button><span>       </span>
    <button className="delButton" onClick={(e)=>{updateEntries(deleteEntry(id))}} >Del</button>



   </div>
   );
}

export default Entry;