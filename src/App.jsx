import { useState } from "react";
import { InconmpleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[i]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickReturn = (i) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(i, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />

      <InconmpleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <div className="complete-area">
        <p className="title">完了TODO</p>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <div key={i} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickReturn(i)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
