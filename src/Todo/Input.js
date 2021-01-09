import React from "react";

// const input = (props) => {
//   return (
//     <input
//       type="text"
//       placeholder="Enter task..."
//       onChange={props.change}
//       value={props.vallue}
//     />
//   );
// };

// export default input;

export default ({ change, vallue, ...rest }) => (
  <input
    type="text"
    placeholder="Enter task..."
    onChange={change}
    value={vallue}
    {...rest}
  />
);
