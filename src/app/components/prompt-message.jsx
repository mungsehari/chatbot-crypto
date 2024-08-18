import React from "react";

const PromptMessage = ({ message, index }) => {
  return (
    <div>
      <div className="px-3 py-4">
        {message} - {index}
      </div>
    </div>
  );
};

export default PromptMessage;
