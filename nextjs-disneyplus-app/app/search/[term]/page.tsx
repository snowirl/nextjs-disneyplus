import React from "react";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = ({ params: { term } }: Props) => {
  const termToUse = decodeURI(term);
  return <div>{termToUse}</div>;
};

export default SearchPage;
