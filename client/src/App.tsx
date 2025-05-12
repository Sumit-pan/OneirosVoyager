import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminLogin = lazy(() => import('./admin/login'));
const ManageBlog = lazy(() => import('./admin/ManageBlog'));
const NotFound = lazy(() => import('./pages/notfound'));

// Non-lazy
import AdminRoute from './admin/AdminRoute';

// Layout component to conditionally render Navbar and Footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
return (
  <div className="app">
  {!isAdminRoute && <Navbar />}
  {children}
  {!isAdminRoute && <Footer />}
</div>
);
}
const App: React.FC = () => {
  return (
   
    <Router>
      <Layout>
      <div className="app">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
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

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      </Layout>
    </Router>
  );
};

export default App;
