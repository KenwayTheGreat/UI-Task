import SideMenu from "./Components/SideMenu";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="app">
      <SideMenu />
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
