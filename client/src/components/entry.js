import {updateFav,deleteEntry} from '../utils/services'
import ShareIcon from '@mui/icons-material/Share';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import './entry.css';

const Entry = ({entry,setEntries}) => {

  let id = entry._id;
  let date = entry.date.slice(8, 10);
  let month = Number(entry.date.slice(5, 7));
  let year = entry.date.slice(0, 4);
  let time = entry.date.slice(11, 16);
  let hour = Number(time.slice(0, 2));

  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  function updateEntries(promise){

   promise.then(data=>{
    setEntries(data);
  }).catch(err=>{
    console.log('Update or delete error',err);
  })
  }
function showalert(e){

}

  return (
    <div className='entry-box' onClick={showalert}>
    <div>
      <div className="title-time-box">
        <div>{entry.title}</div>
        <div>{date} {Months[month - 1]}</div>
      </div>
      <div className='entry-body'>{entry.entry.substring(0,35)} </div>

    </div>





    <div className="icons-outerbox">
      <div className="icons-box">
        {!entry.favourite && <div >< FavoriteBorderSharpIcon onClick={(e)=>{updateEntries(updateFav(id))}} /></div>}
        {entry.favourite && <div>< FavoriteSharpIcon onClick={(e)=>{updateEntries(updateFav(id))}} /></div>}
        <div><DeleteIcon onClick={(e)=>{updateEntries(deleteEntry(id))}} /></div>
        <div><ShareIcon /></div>
      </div>
    </div>




   </div>
   );
}

export default Entry;