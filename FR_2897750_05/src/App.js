import React, { useState, useMemo, useRef } from "react";
import { useTodosReducer, CHECK_ITEM, ADD_ITEM, REMOVE_ITEMS} from './context';
import './App.css';

export const TrashButton = ({ isVisible }) => {
  const [, dispatch] = useTodosReducer()
  const remove = () =>  dispatch({ type: REMOVE_ITEMS })
 
  return isVisible ? <button onClick={remove}>remove completed</button> : null
}

export const TodoList = () => {
  const [state, dispatch] = useTodosReducer()
  console.log(state.items)
  const handleOnClick = (id) => {

    dispatch({ type: CHECK_ITEM, payload: {id }})
  }
  return(<ul className="mt-3">
  {state.items.map((item) => (
    <li key={item.id} className={`${item.done && "done"}`} onClick={() => handleOnClick(item.id)}>
      {item.value}
    </li>
  ))}
  </ul>)
}


function App() {
  const inputRef = useRef()
  const [value, setValue] = useState(null)
  const [state, dispatch] = useTodosReducer()
  
  const handleOnChange = (e) => setValue(e.target.value)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!value) { return false }
    dispatch({ type: ADD_ITEM, payload: { value }})
    inputRef.current.value = ""
    setValue(null) 
    // plus tard vérif avec état avec React devTools
  }
  const isVisible = useMemo(() => {
    return state.items.find(item => item.done)
  }, [state.items])

  return (
    <div className="App">
        <h1 className="mb-2">La Todo Liste</h1>
        <form data-testid="form" onSubmit={handleOnSubmit} style={{ display: "flex" }}>
          <input
            ref={inputRef}
            className="form-control"
            type="text"
            name="inputTodo"
            onChange={handleOnChange}
          />
        </form>
        <TodoList />
        <TrashButton isVisible={isVisible}/>
    </div>
  );
}
export default App;
