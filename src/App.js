import React from 'react';
import TodoApp from './Component/TodoApp/TodoApp';
import Header from './Component/Header/Header';
import About from './Component/About/About';
import {BrowserRouter as Router,Route} from "react-router-dom";

//using functioinal component here
function App() {
  return (
    <Router>
      {/* Display the header component on top */}
      <Header/>
      {/* Using react router - if path is exactly / then show todoapp, if path starts with /about then show about  */}
      <Route path="/" exact component={TodoApp}/>
      <Route path="/about" component={About}/>

      {/* Adding below line to fix  issue while deplying in github, '/' case wont work */}
      <Route path="/first_reactProject" exact component={TodoApp}/>

    </Router>
  );
}

export default App;
