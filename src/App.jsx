import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["hoge", "foo"]);
  const [completeTodos, setCompleteTodos] = useState(["hoge", "foo"]);

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
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了TODO</p>
        <ul>
          {incompleteTodos.map((todo, i) => {
            return (
              <div key={i} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(i)}>完了</button>
                <button onClick={() => onClickDelete(i)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

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
