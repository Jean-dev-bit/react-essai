import './App.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Works from './Components/Works/Works';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Content/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
