import './App.css';
import {Footer} from './component/Footer.jsx';
import {Navbar} from './component/Navbar.jsx';
import {Home} from './component/Home.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
