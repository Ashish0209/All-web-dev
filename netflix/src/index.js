import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";

// console.log(Sdata[0].sname);

// function ncard(val){
//   return(
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   );
// }

ReactDOM.render(
    <>
      <App />

    {/* <Card
      imgsrc={Sdata[0].imgsrc}
      title={Sdata[0].title}
      sname={Sdata[0].sname}
      link={Sdata[0].link}
    /> */}

  </>,
  document.getElementById("root")
);


