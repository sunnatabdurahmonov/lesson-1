
import './App.css';
import Article from './article/Article';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Section from './section/Section';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
