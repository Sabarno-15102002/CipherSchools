import logo from "./logo.svg";
import "./App.css";
import IntroDiv from "./Component/IntroDiv";
import About from "./Component/About";
import Ciphermap from "./Component/Ciphermap";
import Social from "./Component/Social";
import Proffesional from "./Component/Proffesional";
import Password from "./Component/Password";
function App() {
  
  return (
    <div className="App">
      <IntroDiv />
      <About />
      <Ciphermap/>
      <Social/>
      <Proffesional/>
      <Password/>
    </div>
  );
}

export default App;
