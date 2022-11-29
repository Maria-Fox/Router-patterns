import React from "react";
import {Routes, Route, NavLink} from "react-router-dom";
import NotFound from "./NotFound";
import DogList from "./DogList";
import DogDetail from "./DogDetail";

const NavRoutes = ({dogs}) => {
  return (
    <nav>
      <NavLink to = "/dogs">Home</NavLink>

      <Routes>
        <Route 
          path = "/dogs" 
          element = {<DogList dogs = {dogs}/>} > 
        </Route>

        <Route 
          exact path = "/dogs/:name" 
          element = {<DogDetail dogs = {dogs}/>}>
        </Route>

        <Route path = "*" element = {<NotFound />}></Route>
      </Routes>
    </nav>
  )
}

export default NavRoutes;