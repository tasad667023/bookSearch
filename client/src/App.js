import './App.css';
import Save from './pages/Save'
import Search from './pages/Search'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"



function App() {
  return (
     <Router>
       <Switch>
         <Route exact path = "/" component = {Search} />
         <Route path = "/save" component = {Save} />
       </Switch>
     </Router>
  );
}

export default App;
