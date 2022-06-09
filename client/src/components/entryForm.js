import './entryForm.css'

const Entryform = () => {

  return (
    <div className='FORM'>
      <div>
        <form className='form' >


              <label className='label' >Title</label><br></br>
              <input name="title" type="text" placeholder='Title...' autoComplete='off'></input><br></br>

              <label className='label'>Date</label><br></br>
              <input name ="date" type="datetime-local" autoComplete='off' ></input><br></br>

              <label className='label'>Entry</label><br></br>
              <textarea name="entry"  placeholder='Write here..' autoComplete='off'></textarea><br></br>

        <button id="createbtn" type="submit" >Create</button>
      </form>
    </div>
  </div>
   );
}

export default Entryform;