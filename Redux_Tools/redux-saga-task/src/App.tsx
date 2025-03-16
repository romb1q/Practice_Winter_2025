import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTodosRequest } from "./usersSlice";
import { RootState } from "./store";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Список дел</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
