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
//import MouseWrapper from "./components/hoc/mousePosition/MouseWrapper";
//import RenderWrapper from "./components/renderProp/RenderWrapper";
import Counter from "./components/counter/Counter";


function App() {

  return (
    <div className="App">
      <Counter initialCount={3} />
    </div>

  );
}

export default App;
