import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Amazon = () =>{
    return (
        <>
        <Card
          key={Sdata[3].id}
          imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          sname={Sdata[3].sname}
          link={Sdata[3].link}
        />
        <Card
          key={Sdata[7].id}
          imgsrc={Sdata[7].imgsrc}
          title={Sdata[7].title}
          sname={Sdata[7].sname}
          link={Sdata[7].link}
        />
        <Card
          key={Sdata[5].id}
          imgsrc={Sdata[5].imgsrc}
          title={Sdata[5].title}
          sname={Sdata[5].sname}
          link={Sdata[5].link}
        />
        </>
        
      );
}

export default Amazon;