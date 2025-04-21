import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-blue-500"></div>
    </div>
  );
}

export default Loader;
