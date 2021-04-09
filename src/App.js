import './App.css';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import {GameResultsContainer} from './Providers/GamesResultsContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <GameResultsContainer.Provider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
      </GameResultsContainer.Provider>
    </div>
  );
}

export default App;
