import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { About } from './components/About'
import { Users } from './components/Users'


function App() {
  return (
    <Router>
        {/*Componente base */}
      <div>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
