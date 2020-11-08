import React from "react";

function MessageBox(props) {
  return (
    <div className={`alert alert-${props.variant || "info"} text-center`}>
      {props.children}
    </div>
  );
}

export default MessageBox;
