import React from "react";

function ErrorMessage({ visible, error }) {
  if (!visible || !error) return null;
  return (
    <p style={{ marginTop: 0, color: "#f745a4", fontSize: 16 }}>{error}</p>
  );
}

export default ErrorMessage;
