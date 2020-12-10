import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/navBar.jsx';
import 'materialize-css/dist/css/materialize.min.css'
import 'material-icons'
import Body from './components/navBar/body/body.jsx';
import Product from './components/navBar/body/product.jsx';
import Categories from './components/navBar/body/categories.jsx';
import Home from './components/navBar/body/home.jsx';
import Contact from './components/navBar/body/contact.jsx';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/contact' component={Contact} />
            <Route path='/categories' component={Categories} />
            <Route path='/product' component={Product} />
            <Route path='/body' component={Body} />
            <Route exact path='/' component={Home} />
          </Switch>

        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
