import React from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const { searchTerm } = useParams();

  return (
    <div>
      <div>
        SearchFeed <span>{searchTerm}</span>
      </div>
    </div>
  );
};

export default SearchFeed;
