import SideMenu from "./Components/SideMenu";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import classNames from "classnames";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <div className="col-3">
        <SideMenu />
      </div>
      <div className={classNames("row", "navigation")}>
        <div className="col-12">
          <Navbar />
        </div>
      </div>
      <div className="row d-flex justify-content-end">
        <div className="col-9 ">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
