import { useState } from "react";
import "./App.css";
//Components
// import Form from "./components/Form";
// import Theme from "./components/Theme";
// import ManageState from "./components/ManageState";
//import FetchingData from "./components/FetchingData";
//import Test from "./components/Test";
//import {RadioGroup, RadioOption} from "./components/Radio";


function App() {

  const [selected, setSelected] = useState("");

  return (
    <>
    </>
    // <div className="App">
    //   <h2>How did you hear about Little Lemon?</h2>

    //   <RadioGroup onChange={setSelected} selected={selected}>
    //     <RadioOption value="social_media">Social Media</RadioOption>
    //     <RadioOption value="friends">Friends</RadioOption>
    //     <RadioOption value="advertising">Advertising</RadioOption>
    //     <RadioOption value="other">Other</RadioOption>
    //   </RadioGroup>

    //   <button disabled={!selected}>Submit</button>

    // </div>
  );
}

export default App;
