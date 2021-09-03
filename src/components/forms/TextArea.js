import React from "react";

function TextArea({ ...otherProps }) {
  return (
    <div className="form-group">
      <textarea rows="3" className="form-control" {...otherProps} />
    </div>
  );
}

export default TextArea;
