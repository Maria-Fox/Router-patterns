import React, {useState} from "react";
import { Routes, Route, NavLink, Outlet} from "react-router-dom";
import Colors from "./Colors";
import SingleColor from "./SingleColor";
import NewColor from "./NewColor";

const NavRoutes = ({colors}) => {
  // console.log(colors);

  let [stateColors, setColors] = useState(colors);
  let updateColors = (newColor) => {
    setColors(stateColors => [...stateColors, newColor]);
  }


  return(
    <div>
      <NavLink to ="/colors" >Home</NavLink>
      <Routes>

        <Route 
        path = "/colors" 
        element = {<Colors colors = {stateColors} 
        />}>
        </Route>

        <Route 
          path = "/colors/:color" 
          element = { <SingleColor colors = {stateColors} />} >
        </Route>

        <Route 
          path = "/colors/new" 
          element = {<NewColor colors = {stateColors} 
          updateColors = {updateColors} />}  >
        </Route>

        <Route 
          path = "*" 
          element = {<Colors colors = {colors}/>}>
        </Route>

      </Routes>
      <Outlet />

    </div>

  )
}

export default NavRoutes;


// element = {}