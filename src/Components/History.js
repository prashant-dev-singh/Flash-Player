import { AppContext } from "./VideoContext";
import React from "react";
import { useContext } from "react";

export default function History() {
  // const data = useContext(AppContext);
  const { state } = useContext(AppContext);
  const { historyList } = state;
  console.log(historyList);
  return (
    <>
      {historyList.map(({ id }) => {
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
