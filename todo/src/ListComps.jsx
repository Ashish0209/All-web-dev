import React, { useState } from "react";
import Delete from '@material-ui/icons/Delete';

const ListComps = (props) => {

    const [line,setLine] = useState(false); 

    const cutIt = () =>{
        setLine(true);
    }
    return (
        <div className="todo_style">
            <span
                onClick={cutIt}>
                <Delete className="deleteIcon" />
            </span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
        </div>)
}

export default ListComps