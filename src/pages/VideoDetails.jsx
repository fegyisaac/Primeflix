import React, { useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";

const VideoDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

export default VideoDetails;
