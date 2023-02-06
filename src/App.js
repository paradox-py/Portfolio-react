import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Skills } from './components/Skills';
import { Banner } from './components/Banner';
import {Projects} from './components/Projects';
import { ProjectCard } from './components/ProjectsCard';


function App() {
  return (
    <div className="App">

      <NavBar />

      <Banner />

      <Skills/>

       <Projects/>
       
       <ProjectCard/>
    </div>
  );
}

export default App;
