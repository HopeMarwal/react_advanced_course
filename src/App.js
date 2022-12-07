import React from "react";
import "./App.css";
//Components
// import Form from "./components/Form";
// import Theme from "./components/Theme";
// import ManageState from "./components/ManageState";
//import FetchingData from "./components/FetchingData";
//import Test from "./components/Test";
//import Radio from "./components/Radio/Radio";
import ClickIncrease from "./components/hoc/ClickIncrease";
import HoverIncrase from "./components/hoc/HoverIncrase";


function App() {

  return (
    <div className="App">
      <ClickIncrease />
      <HoverIncrase />
    </div>

  );
}

export default App;
