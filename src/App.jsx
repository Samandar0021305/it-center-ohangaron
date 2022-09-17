import './App.scss';
import "./normalize.scss";

//
import {Switch ,Route} from "react-router-dom"; 

import Home from "./page/home/Home.jsx";

function App() {
  return (
    <>
   
        <Switch>
          <Route  exact path="/it-center-ohangaron" component={Home} />
        </Switch>
    </>
  );
}

export default App;
