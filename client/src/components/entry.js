import {updateFav,deleteEntry} from '../utils/services'
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import './entry.css';

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
    <div className="icons-outerbox">
      <div className="icons-box">
        <div><FavoriteBorderSharpIcon onClick={(e)=>{updateEntries(updateFav(id))}} /></div>
        <div><DeleteIcon onClick={(e)=>{updateEntries(deleteEntry(id))}} /></div>
        <div><ShareIcon /></div>
      </div>
    </div>




   </div>
   );
}

export default Entry;