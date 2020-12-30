import './App.css';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';
import Routes from './Components/Route/Route';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
            <Route exact path="/route" >
              <Routes/>
            </Route>
            <Route path="/">
              <Body />
            </Route>
          </Switch>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
