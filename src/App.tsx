import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx';
import About from "./pages/About.tsx";
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import Blog from './pages/Blog.tsx';
import  Navbar  from "./components/Navbar.tsx";

function App() {

  return (
  <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<Blog />} />
      </Routes> 
  </BrowserRouter>
  );
}

export default App;
