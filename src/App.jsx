import "./App.css";
import Navbar from "./components/Navbar";
import Todo from './components/Todo'
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <Todo/>

      <Footer/>
      
    </>
  );
}

export default App;
