
import './App.css';
import Home from './conponents/Home.js/Home';
import Friends from './conponents/Friends/Friends';
import About from './conponents/About/About';
import { Route, Routes } from 'react-router-dom';
import NotFound from './conponents/NoteFound/NotFound';
import Header from './conponents/Header/Header';
import FriendDetail from './conponents/FriendDetail/FriendDetail';
import Posts from './conponents/Posts/Posts';
import PostDetail from './conponents/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
    {/* if we write any component above router, it wil be common for every path */}
      <Header></Header>
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path="/friends" element ={<Friends></Friends>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
        {/* this is nested post details, do dont need to write full path */}
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/friend/:friendId" element = {<FriendDetail></FriendDetail>}></Route>
        {/* the no found route must be at the last element, and the below route is for if someone search for any undefined route path */}
        <Route path="*" element= {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
