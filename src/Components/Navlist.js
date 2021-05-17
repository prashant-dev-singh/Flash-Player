import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import VideoList from "./VideoList";
import History from "./History";
import Playlist from "./Playlist";
import Videos from "./Videos";

export default function Navlist() {
  return (
    <>
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
              <Link to="/history">HISTORY</Link>
            </li>
          </div>
        </ul>

        <Routes>
          <Route path="/" element={<VideoList />}></Route>
          <Route path="/history" element={<History />}></Route>
          <Route path="/playlist" element={<Playlist />}></Route>
          <Route path="/Videos/:vId" element={<Videos />} />
        </Routes>
      </div>
    </>
  );
}
