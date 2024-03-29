import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = (props: Props) => {
  return (
    <div>
      Welcome to the genre {props.params.id} and name {props.searchParams.genre}
    </div>
  );
  //   http://localhost:3000/genre/80?genre=Crime
};

export default GenrePage;
