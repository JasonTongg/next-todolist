import React, {useState, useRef} from 'react';
import List from '../List/List';
import style from './Style.module.css';

export default function Todo({initialData}) {
  let [todo, setTodo] = useState([initialData]);
  let inputRef = useRef();

  let submitHandler = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    setTodo((prev) => {
      return [
        ...prev,
        {text: inputRef.current.value, status: false, id: +new Date()},
      ];
    });
  };

  let RemoveChecked = () => {
    let newTodo = todo.filter((item) => item.status === false);
    setTodo(newTodo);
    document
      .querySelectorAll('input')
      .forEach((item) => (item.checked = false));
  };

  return (
    <div className={style.Container}>
      <h1>TODOLIST</h1>
      <form className={style.InputContainer} onSubmit={submitHandler}>
        <input type="text" placeholder="Add todo..." ref={inputRef} />
        <button type="submit">+</button>
      </form>
      <List todo={todo} setTodo={setTodo}></List>
      <div className={style.Info}>
        <p>
          {todo.filter((item) => item.status === true).length} of {todo.length}{' '}
          tasks done
        </p>
        <button onClick={RemoveChecked}>Remove Checked</button>
      </div>
    </div>
  );
}
