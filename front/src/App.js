import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Books from './components/containers/Books';
import CartSummary from './pages/CartSummary';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route path="/" exact>
              <Books />
            </Route>
            <Route path="/cart">
              <CartSummary />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
