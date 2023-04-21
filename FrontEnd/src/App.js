import logo from "./logo.svg";
import "./App.css";
import IntroDiv from "./Component/IntroDiv";
import About from "./Component/About";
import Ciphermap from "./Component/Ciphermap";
import Social from "./Component/Social";
import Proffesional from "./Component/Proffesional";
import Password from "./Component/Password";
import Navbar from "./Component/Navbar";
import SideNav from "./Component/SideNav";
import SideNavBar from "./Component/SideNav";
function App() {
  
  return (
    <div className="App">
        <Navbar/>
      {/* <div className="row">
        <SideNav/> */}
        <div className={"col-10" || "col-11"}>
      <IntroDiv />
      <About />
      <Ciphermap/>
      <Social/>
      <Proffesional/>
      <Password/>
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
