import React from "react";

type Props = {
  itemName: string;
};
export const TodoItem: React.FC<Props> = (props) => {
  return (
    <>
      <div>{props.itemName}</div>
    </>
  );
};
