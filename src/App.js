import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Tutorial from "./components/Tutorial";
import Dashboard from "./components/Dashboard";
import Examhome from "./components/Examhome";

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Tutorial />
      <Dashboard />
      <Examhome />
    </div>
  );
}

export default App;
