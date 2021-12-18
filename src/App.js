import { useState, useRef } from "react"
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const toDoListForm = useRef(null)
  
  const handleClickEvent = () => {
    const newArray = [...items]
    const form = toDoListForm.current
    newArray.push(form["listItem"].value)
        setItems(newArray)
 }

  const removeHandler = (index) => {
      const newArray = [...items]
      newArray.splice(index, 1)
      setItems(newArray)
  }


  
  return (
      <div className="container">
          <h1 class="title">TO DO LIST</h1>

          <div>
            <form ref={toDoListForm}>
            <input class="input" name={'listItem'}/>
          
            </form>
            <button className="button" onClick={handleClickEvent}>SUBMIT</button>
          </div>

          <ul>
          {items.map((item, index) => {
                return  (
                    <>
                        <li key={index}>
                          {item}
                          <button className="button remove" onClick={() => removeHandler(index)}>remove</button>
                        </li>
                    </>
                )
            })}
          </ul>
      </div>
  )
}

export default App;
