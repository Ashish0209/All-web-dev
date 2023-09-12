import React, { useState } from "react";
import Lists from "./Lists";

const App = () => {

  const [fullName, setFullName] = useState("");
  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setFullName(event.target.value)
  }

  const Listofitems = (event) => {
    setItems((event) => {
      return [...event, fullName];    // if list is empty dont add
    })

    setFullName("");  
  }

  const deleteItems = (id) => {
    // console.log("clicked");
    setItems((event) => {
      return event.filter((arrEle, index) => {
        return index !== id;     //== value only same or not
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" onChange={inputEvent} value={fullName} />
          <button onClick={Listofitems}>+</button>
          <ol>
            {/* current value ka index */}
            {items.map((data, index) => {
              return <Lists
                key={index}
                id={index}
                text={data}
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>

    </>
  );
}

export default App;