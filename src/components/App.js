import React, { useState } from "react"
import '../styles/App.css';
import TopBar from "./TopBar";
import Main from "./Main"

function App() {
  // App component is the Lowest Common Ancestor of TopBar and Login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const onLogout = () => {
    setIsLoggedIn(false); // trigger a rerender.
    setToken("");
  }
  const handleLoggedIn = token => {
    setIsLoggedIn(true);
    setToken(token);
  }

  return (
    <div className="App">
      <TopBar isLoggedIn={isLoggedIn} onLogout={onLogout}/>
      <Main handleLoggedIn={handleLoggedIn}/>
    </div>
  );
}


export default App;
