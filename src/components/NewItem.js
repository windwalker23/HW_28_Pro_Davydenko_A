import React, { useContext } from "react";
import Context from "../context";

export default function NewItem(todos) {
  let textInput = React.createRef();
  const { setTodos } = useContext(Context);

    const addItem = (e) => {

        setTodos(
          todos => {
            let uniqueId = (todos[todos.length - 1].id) + 1;
            console.log(uniqueId);
            let task = [...todos];
            task.push({ id: uniqueId, title: textInput.current.value, completed: false });
            return task
          }
        )
    };

    return(
        <>
        <input ref={textInput} type="text"></input>
        <button onClick={addItem}>Add task</button>
        </>
    )
};
