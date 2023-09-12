import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import ListComps from "./ListComps";


const MatUIToDO = () => {
    const [items, setItem] = useState()
    const [newItem, setNewItem] = useState([])

    const inputEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () =>{
        setNewItem((prevValue) =>{
            return [...prevValue,items]
        })

        setItem(" ");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List</h1>
                    <br />
                    <input 
                    type="text" 
                    value={items}
                    placeholder="Add an Items"
                    onChange={inputEvent}  
                    />
                    <Button className="newBtn" onClick={listOfItems}>
                        <AddIcon />
                    </Button>

                    <br />
                    <ol>
                        {newItem.map((val,index) => {
                            return <ListComps 
                                key = {index}
                                text = {val}
                            />
                        })}
                    </ol>
                    <br />
                </div>
            </div>

        </>
    )
}

export default MatUIToDO;