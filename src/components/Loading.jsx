import React from "react";
import { Loader } from "@mantine/core";

const Loading = () => {
  return (
    <div className="min-h-screen flex  justify-center items-center ">
      <Loader color='violet' variant='dots' />
    </div>
  );
};

export default Loading;
