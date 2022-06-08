
import './App.css';
import Footer from './components/footer';
import Sidebar from './components/sidebar';

function App() {


  return (
    <div className="App">
      <div className='App-wrapper'>
        <div>

        <Sidebar>


        </Sidebar>
        </div>
        <div>
        
        <textarea className='entry' />
        </div>
      </div>
      <Footer/>
    </div>


  );
}

export default App;
