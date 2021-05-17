import React from "react";
import Data from "./Data";
import Videos from "./Videos";
import { Link } from "react-router-dom";

const VideoList = () => {
  return (
    <>
      <h2>Video List</h2>

      {Data.map(({ id, description }) => {
        return (
          <>
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                width: "20%",
                padding: "2rem",
                cursor: "pointer",
              }}
            >
              <Link to={`/Videos/${id}`}>
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt=""
                />{" "}
              </Link>
              <p>{description}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default VideoList;
