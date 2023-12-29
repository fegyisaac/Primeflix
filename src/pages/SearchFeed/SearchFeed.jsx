import React from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();
  return (
    <div>
      <div>
        <div>{searchTerm}</div>
      </div>
    </div>
  );
};

export default SearchFeed;
