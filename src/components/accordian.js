import React, { useState } from "react";
import {question} from './api'
import Myaccordian from './Myaccordian'
const Accordian = () =>{
    const [data,setData] = useState(question);
    return(
        <>
            <section className="main-div">
            <h1>React Interview Question</h1>
            {data.map((currElm,id) =>{
                {/* const {id} = currElm; */}
                return <Myaccordian
                    // key={id} {...currElm}  spread operator sae baki ques and ans aa rahe hai
                    key={id} {...currElm}   

                />
            })}
            </section>
        </>
    )
}

export default Accordian