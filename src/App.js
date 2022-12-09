import React from "react";
import "./App.css";
//Components
// import Form from "./components/Form";
// import Theme from "./components/Theme";
// import ManageState from "./components/ManageState";
//import FetchingData from "./components/FetchingData";
//import Test from "./components/Test";
//import Radio from "./components/Radio/Radio";
//import ClickWrapper from "./components/hoc/click/ClickWrapper";
import MouseWrapper from "./components/hoc/mousePosition/MouseWrapper";


function App() {

  return (
    <div className="App">
      <MouseWrapper />
    </div>

  );
}

export default App;
