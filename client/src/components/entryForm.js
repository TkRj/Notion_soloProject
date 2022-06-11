import './entryForm.css'
import SaveIcon from '@mui/icons-material/Save';
const Entryform = ({onSubmitHandler}) => {

  return (

      <div className='form-container'>
        <form className='form-box' onSubmit={onSubmitHandler} >

              <div className='label'>

              <input name="title" type="text" placeholder='Title...' autoComplete='off'></input><br></br>
              </div>
              <div className='label'>

              <input name ="date" type="datetime-local"  ></input><br></br>
              </div>
              <div className='label'>

              <textarea name="entry"  placeholder='Write here..' autoComplete='off'></textarea><br></br>
              </div>

        <button id="createbtn" type="submit" ><SaveIcon/></button>
      </form>
    </div>

   );
}

export default Entryform;