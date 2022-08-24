import './App.css';
import Loader from './component/Loader';
import Navbar from './component/Navbar';
import { Home } from './component/Home';
import {About, Facts} from './component/About';
import {Works} from './component/Works';
import { Skill } from './component/Skill';
function App() {
  return (
   <>
   <Loader/>
   <div id="main">
    
  
    <Navbar/>
    <div className="wrapper">
      <div className="content-holder" id="sec1">
        <Home/>
        <About/>
        <Facts/>
        <Works/>
        <Skill/>
      </div>

    </div>

    </div>
   </>
 
  
   
  );
}

export default App;
