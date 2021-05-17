import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data";

const Videos = () => {
  const { vId } = useParams();

  const video = Data.find((item) => {
    return item.id === vId;
  });

  console.log(video);
  return (
    <>
      <div style={{ margin: "5rem" }}>
        {
          <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${video.id}`}
          ></iframe>
        }
        <p>
          <button>Like</button>
          <button>Add to Playlist</button>
        </p>
      </div>
    </>
  );
};

export default Videos;
