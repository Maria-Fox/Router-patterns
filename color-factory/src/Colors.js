import React from "react";
import { NavLink } from "react-router-dom";


const Colors = ({colors}) => {
  // console.log(colors);
  return(
    <div>
    <NavLink to ="/colors/new">Add Color</NavLink>
    
      <ul>
        {colors.map(c => {
          return(
            <li> 
            <NavLink to = {`/colors/${c}`} >{c}</NavLink>
          </li>
          )})}
      </ul>

      
    </div>

  )
}

export default Colors;