//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Summary from './components/Summary'
import Additional from './components/Additional'
import Bios from './components/Bios'
import Comparables from './components/Comparables'
import Roi from './components/Roi'
import Synopsis from './components/Synopsis'
import Timetable from './components/Timetable'





function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/summary">
              <Summary />
          </Route>
          <Route path="/synopsis">
              <Synopsis />
          </Route>
          <Route path="/comparables">
              <Comparables />
          </Route>
          <Route path="/roi">
              <Roi />
          </Route>
          <Route path="/timetable">
              <Timetable />
          </Route>
          <Route path="/bios">
              <Bios />
          </Route>
          <Route path="/additional">
              <Additional />
          </Route>
          <Route path="/">
              Welcome!!!
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
