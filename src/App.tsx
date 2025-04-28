import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import AdminLogin from './admin/login';
import AdminRoute from './admin/AdminRoute';
import ManageBlog from './admin/ManageBlog';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminRoute />}>
            <Route path="blog" element={<ManageBlog />} />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

