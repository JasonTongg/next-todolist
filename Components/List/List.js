import React from 'react';
import style from './Style.module.css';

export default function List({todo, setTodo}) {
  todo = todo[0];
  let checkToggle = (id) => {
    let newTodo = [...todo];
    newTodo[id].status = !newTodo[id].status;
    setTodo(newTodo);
  };

  return (
    <div className={style.Container}>
      {todo.map((item, index) => (
        <div className={style.TodoContainer} key={index}>
          <input
            type="checkbox"
            id={item.id}
            onClick={() => checkToggle(index)}
          />
          <label htmlFor={item.id} className={item.status ? 'active' : null}>
            {item.text}
          </label>
        </div>
      ))}
    </div>
  );
}
