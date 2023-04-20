import logo from "./logo.svg";
import "./App.css";
import IntroDiv from "./Component/IntroDiv";
import About from "./Component/About";
import Ciphermap from "./Component/Ciphermap";
import Social from "./Component/Social";
import Proffesional from "./Component/Proffesional";
import Password from "./Component/Password";
import Navbar from "./Component/Navbar";
function App() {
  
  return (
    <div className="App">
      <Navbar/>
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
