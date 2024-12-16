import { useState } from "react";
import "./styles.css";
import image from "./under-construction.jpg"
function PageUnderConstruction() {
  return (
   <div className="pageunderconstruction">
    <img src={image} />
   </div>
  );
}

export default PageUnderConstruction;
