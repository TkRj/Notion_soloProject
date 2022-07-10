import './searchForm.css'

const SearchForm = ({searchHandler}) => {


  return (
    <form onSubmit={searchHandler}>
      Search by<br></br>

      <input type="text"  name="year" placeholder="Year?"></input><br></br>
      <select name="months" id="month">
    <option value="jan">Jan</option>
    <option value="feb">Feb</option>
    <option value="mar">Mar</option>
    <option value="apr">Apr</option>
  </select>
    <button className="searchBtn" type="submit" >Find</button>
    </form>
   )
}

export default SearchForm;