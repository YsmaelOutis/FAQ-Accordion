import React from "react";

const accordionItem = ({summary, details}) => {

  return (
    <details name="unique">
      <summary>
        <p>{summary}</p>
        <img src="icon-arrow-down.svg" alt="" />
      </summary>
      <p>{details}</p>
    </details>
  );
};

export default accordionItem;
