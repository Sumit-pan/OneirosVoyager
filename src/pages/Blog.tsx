import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Web Developer & Designer</h2>
              <p className="text-lg mb-8">I create beautiful, functional websites and applications with a focus on user experience.</p>
              <div className="flex space-x-4">
                <Link to="/about" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">About Me</Link>
                <Link to="/projects" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300">View Projects</Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-300 h-64 md:h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Your Profile Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <p className="text-gray-600">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-600 mb-4">Brief description of your first project and what technologies you used.</p>
                <Link to="/projects" className="text-blue-600 hover:underline">View details →</Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <p className="text-gray-600">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-600 mb-4">Brief description of your second project and what technologies you used.</p>
                <Link to="/projects" className="text-blue-600 hover:underline">View details →</Link>
              </div>
            </div>
            
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-200 h-48 flex items-center justify-center">
                <p className="text-gray-600">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-600 mb-4">Brief description of your third project and what technologies you used.</p>
                <Link to="/projects" className="text-blue-600 hover:underline">View details →</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">View All Projects</Link>
          </div>
        </div>
      </section>
      
      {/* Latest Blog Posts */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Blog Post Title</h3>
                <p className="text-gray-500 mb-4">April 28, 2025</p>
                <p className="text-gray-600 mb-4">Brief excerpt from your blog post goes here. Make it engaging to encourage readers to click through.</p>
                <Link to="/blog" className="text-blue-600 hover:underline">Read more →</Link>
              </div>
            </div>
            
            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Another Blog Post</h3>
                <p className="text-gray-500 mb-4">April 20, 2025</p>
                <p className="text-gray-600 mb-4">Brief excerpt from your second blog post. Keep it short but interesting enough to capture attention.</p>
                <Link to="/blog" className="text-blue-600 hover:underline">Read more →</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Visit the Blog</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

