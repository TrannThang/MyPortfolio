
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar1 from './components/NavBar1'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/Contact';



function App() {
  return (
    <div className="App">
        <NavBar1></NavBar1>
        <Banner></Banner>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
    </div>
  );
}
export default App;
