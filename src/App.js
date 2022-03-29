
import './App.css';
import Home from './conponents/Home.js/Home';
import Friends from './conponents/Friends/Friends';
import About from './conponents/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './conponents/NoteFound/NotFound';

function App() {
  return (
    <div className="App">
      <h2>Welcome to my routing website.</h2>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path="/friends" element ={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element= {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
