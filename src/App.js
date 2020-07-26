import React from 'react';
import TodoApp from './Component/TodoApp/TodoApp';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import {BrowserRouter as Router,Route} from "react-router-dom";


function App() {
  return (
    <Router>

      <Header/>
      <Route path="/" exact component={TodoApp}/>
      <Route path="/about" component={About}/>
    </Router>


  );
}

export default App;
