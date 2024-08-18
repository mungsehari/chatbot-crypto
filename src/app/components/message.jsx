import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <div className="px-3 py-4 bg-opacity-50 bg-gray-900 rounded-md">
        {message}
      </div>
    </div>
  );
};

export default Message;
