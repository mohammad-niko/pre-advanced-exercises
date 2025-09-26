import React from "react";

export function CreateBtn({ onClick, elementText, color }) {
  return (
    <button style={{  color  }} onClick={onClick}>
      {elementText}
    </button>
  );
}
