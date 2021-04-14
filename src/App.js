import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Wishlist from "./Components/Wishlist";
import Playlist from "./Components/Playlist";
function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <input className="navbar-txtbx"></input>

        <div className="navbar-itm-rgt">
          <li className="navbar-list">
            <li>
              <Link to="/playlist">PLAYLIST</Link>
            </li>
          </li>
          <li>
            <Link to="/wishlist">WISHLIST</Link>
          </li>
        </div>
      </ul>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/playlist" element={<Playlist />}></Route>
      </Routes>
    </div>
  );
}

export default App;
