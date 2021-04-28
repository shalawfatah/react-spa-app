import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/news' exact>
        <News />
      </Route>
      <Route path='/contact' exact>
        <Contact />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;

