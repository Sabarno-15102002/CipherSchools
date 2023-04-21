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
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <div className="App">
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>&times;</a>
        <a href="#"><i className="fas fa-home-lg" ></i>&nbsp;Home</a>
        <a href="#"><i className="fa fa-book-reader" ></i>&nbsp;Course</a>
        <a href="#"><i className="fas fa-compass"></i>&nbsp;Trending</a>
        <a href="#"><i className="fas fa-user"></i>&nbsp;Following</a>
        <a href="#"><i className="fas fa-columns"></i>&nbsp;Dashboard</a>
        <a href="#"><i className="fab fa-discord"></i>&nbsp;Discord</a>
      </div>
      <Navbar />
      <IntroDiv />
      <About />
      <Ciphermap />
      <Social />
      <Proffesional />
      <Password />
    </div>
  );
}

export default App;