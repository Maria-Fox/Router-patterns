import React from "react";
import { Navigate, redirect, useParams } from "react-router-dom";

const SingleColor = ({colors}) => {
  console.log(colors)
  let colorObj = useParams();
  console.log(colorObj);

  // compare the param to array color
  let chosenColor = colors.find(c => c === colorObj.color);
  console.log(chosenColor);

  if(!chosenColor){
    // console.log("redirecting")
    return(
      <Navigate to = "/colors" element = {colors}></Navigate>
    )
  }

  return(
    <div style = {{backgroundColor : chosenColor, height: "800px"}}>
      <p>{chosenColor}</p>
    </div>
  )
}

export default SingleColor;