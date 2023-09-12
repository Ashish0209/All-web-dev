import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css";
import Netflix from "./NetFlix";
import Amazon from "./Amazon";

// console.log(Sdata[0].sname);
const favSeries = 'netflix';

// const FavS = () =>{
//   if(favSeries === 'netflix'){
//     return <Netflix/>
//   }
//   else{
//     return <Amazon/>
//   }
// };




const App = () => (
  <>
    <h1 className="heading_style">List of top {Sdata[Sdata.length-1].id} Hollywood Series </h1>
    {Sdata.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    {/* <FavS/> */}
    {/* {(favSeries === "netflix") ?  <Netflix/> :  <Amazon/>} */}
  </>
);

export default App;
