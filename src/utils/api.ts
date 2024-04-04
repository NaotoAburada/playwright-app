import axios from "axios";
import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

const requestUrl = "http://localhost:3001/";
export const useApiGet = (url: string) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get(requestUrl + url).then((response: { data: any }) => {
      setTodoList(response.data);
    });
  }, []);

  return todoList;
};
