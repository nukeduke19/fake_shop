import React from "react";

function InputField({ type, ...otherProps }) {
  return (
    <div className="form-group">
      <input type={type} className="form-control" {...otherProps} />
    </div>
  );
}

export default InputField;
