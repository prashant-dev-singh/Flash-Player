import React from "react";
import { AppContext } from "./VideoContext";
import { useContext } from "react";

export default function Playlist() {
  const { state, dispatch } = useContext(AppContext);
  const { likedList } = state;
  console.log(likedList);
  return (
    <>
      {likedList.map(({ id }) => {
        return (
          <>
            <div style={{ margin: "5rem" }}>
              {
                <iframe
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/${id}`}
                ></iframe>
              }
              <p>
                <button>Like</button>
                <button>Add to Playlist</button>
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}
