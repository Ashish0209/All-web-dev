import React from "react";
const Lists = (props) => {

    return (
        <>
            <div className='todo_style'>
                <i className="fa fa-times" aria-hidden="true"
                    onClick={() => {   // callback
                        props.onSelect(props.id)
                    }}
                />
                <li>{props.text}</li>

            </div>

        </>
    )
}

export default Lists;
