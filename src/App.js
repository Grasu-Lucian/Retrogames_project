import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from './Shared/Navbar';
import Home from './Pages/Home.js'
import { Fragment } from 'react';
import SpaceInvaders from './Pages/SpaceInvaders';
import Pacman from './Pages/Pacman';
import Mario from './Pages/Mario';
function App() {
  return (
    <Fragment>
   <Navbar/>
   <Switch>
     <Route path="/SpaceInvaders" exact>
       <SpaceInvaders/>
     </Route>
     <Route path="/" exact>
       <Home/>
     </Route>
     <Route path="/pacman" exact>
       <Pacman/>
     </Route>
     <Route path="/Mario" exact>
       <Mario/>
     </Route>
   </Switch>
    </Fragment>
  );
}

export default App;
