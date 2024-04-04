import React from "react";

type Props = {
  title: string;
};
export const ComicItem: React.FC<Props> = (props) => {
  return (
    <>
      <div>{props.title}</div>
    </>
  );
};
