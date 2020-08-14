import React from "react";
import "./TextItem.css";

/** Component for each word controlling highlight state. */
export function TextItem({ data, value }) {
    const getHighlight = () => {
        if ((Math.floor(data.info.start / 2000) % value) === 0) {
            return "highlight"
        }
        return ""
    }

  return (
      <span className={getHighlight()} contentEditable={true} suppressContentEditableWarning={true}>
        { data.text }{" "}
      </span>
  );
}

