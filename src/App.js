import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './componnets/Login';
import Home from './componnets/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
