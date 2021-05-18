import { AppContext } from "./VideoContext";
import React from "react";
import { useContext } from "react";

export default function History() {
 // const data = useContext(AppContext);
  //console.log(data);
  return (
    <>
      <div style={{ margin: "5rem" }}>
        {
          <iframe
            width="420"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        }
        <p>
          <button>Like</button>
          <button>Add to Playlist</button>
        </p>
      </div>
    </>
  );
}
