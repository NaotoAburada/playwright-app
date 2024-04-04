import React from "react";
import { useApiGet } from "../../utils/api";
import { ComicItem } from "./ComicItem";

export const ComicList: React.FC = () => {
  const comicList = useApiGet("comic-list");
  return (
    <>
      {comicList.map((comic) => {
        return <ComicItem title={comic.title}></ComicItem>;
      })}
    </>
  );
};
