
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import {Skills} from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { GitHubCTA } from './components/GitHubCTA';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <GitHubCTA />
      <Footer />
    </div>
  );
}

export default App;
