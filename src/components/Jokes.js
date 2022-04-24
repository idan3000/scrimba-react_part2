import React from "react";

const Jokes = (props) => {
  return (
    <div>
      {props.setup}
      <br />
      {props.punchline}
      <br />
    </div>
  );
};

export default Jokes;
