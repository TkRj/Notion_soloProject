import {updateFav} from '../utils/services'

const Entry = ({entry}) => {

  let id = entry._id;

  return (
    <>
    {entry._id}<br></br>
    {entry.title},<br></br>
    {entry.date},<br></br>
    {entry.entry}<br></br>
    <br></br>


    <button className="favButton" onClick={(e)=>updateFav(id)} >Fav</button>

   </>
   );
}

export default Entry;