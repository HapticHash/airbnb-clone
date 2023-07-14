"use client";

import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <SyncLoader size={15} color="#ff385c" />
    </div>
  );
};

export default Loader;
