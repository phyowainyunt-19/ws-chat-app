import React, { useState } from "react";
import { Link } from "react-router-dom";

import './Join.css';

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer bg-dark">
      <div className="joinInnerContainer">
        <h1 className="header_text fs-700 text-white">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput mt-20"
            type="text"
            // onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            // onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        {/* I won't use redux or props. Just query string */}
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="btn mt-20 uppercase bg-primary text-white" type="submit">
            Join
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
