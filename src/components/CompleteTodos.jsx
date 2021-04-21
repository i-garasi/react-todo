import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了TODO</p>
      <ul>
        {completeTodos.map((todo, i) => {
          return (
            <div key={i} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClick(i)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
