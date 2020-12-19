import React, { useState } from "react"
import '../styles/App.css';
import TopBar from "./TopBar";
import Main from "./Main"

function App() {
  // App component is the Lowest Common Ancestor of TopBar and Login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLogout = () => {
    setIsLoggedIn(false); // trigger a rerender.
  }

  return (
    <div className="App">
      <TopBar isLoggedIn={isLoggedIn} onLogout={onLogout}/>
      <Main/>
    </div>
  );
}


export default App;
