import React from "react";
import Login from './Login';

var isLoggedIn = true;

const App = () => <div className="container">{
  isLoggedIn ? <h1>Hello</h1> : <Login />
}
</div>

export default App;

