import React from "react";

export const InconmpleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
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
  );
};
