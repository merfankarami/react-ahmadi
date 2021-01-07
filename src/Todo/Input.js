import React from "react";

const input = (props) => {
  return <input type="text" placeholder="Enter task..." onChange={props.change} value={props.vallue} />;
};

export default input;
