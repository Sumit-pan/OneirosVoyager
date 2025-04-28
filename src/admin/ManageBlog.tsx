import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost } from '../types/index';

const ManageBlog: React.FC = () => {
  const navigate = useNavigate();
  
  // Sample blog posts data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Getting Started with React and TypeScript",
      content: "Full content here...",
      excerpt: "A beginner's guide to setting up your first React application with TypeScript.",
      date: "April 15, 2025",
      status: "published",
      author: "Your Name",
      tags: ["React", "TypeScript", "Web Development"]
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      content: "Full content here...",
      excerpt: "Learn advanced CSS techniques to create stunning web designs.",
      date: "April 10, 2025",
      status: "published",
      author: "Your Name",
      tags: ["CSS", "Web Design"]
    },
    {
      id: 3,
      title: "JavaScript Best Practices",
      content: "Full content here...",
      excerpt: "Explore the best practices for writing clean and efficient JavaScript code.",
      date: "April 5, 2025",
      status: "draft",
      author: "Your Name",
      tags: ["JavaScript", "Coding Standards"]
    }
  ]);
  
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
  
  const handleLogout = (): void => {
    localStorage.removeItem('adminAuth');
    navigate('/admin/login');
  };
  
  const confirmDelete = (postId: number): void => {
    const post = blogPosts.find(post => post.id === postId);
    if (post) {
      setPostToDelete(post);
      setShowDeleteModal(true);
    }
  };
  
  const deletePost = (): void => {
    if (postToDelete) {
      setBlogPosts(blogPosts.filter(post => post.id !== postToDelete.id));
      setShowDeleteModal(false);
      setPostToDelete(null);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-white shadow rounded-lg p-4">
              <nav className="space-y-1">
                <a href="/admin/dashboard" className="text-gray-700 hover:bg-gray-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  Dashboard
                </a>
                <a href="/admin/blog" className="bg-blue-50 text-blue-700 hover:bg-blue-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  Manage Blog
                </a>
                <a href="/admin/projects" className="text-gray-700 hover:bg-gray-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                  Manage Projects
                </a>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Manage Blog Posts</h2>
                <button
                  onClick={() => navigate('/admin/blog/new')}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Add New Post
                </button>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Excerpt
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {blogPosts.map((post) => (
                      <tr key={post.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {post.title}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 truncate max-w-xs">
                            {post.excerpt}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {post.date}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {post.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                            className="text-blue-600 hover:text-blue-900 mr-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => confirmDelete(post.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delete Confirmation Modal */}
      {showDeleteModal && postToDelete && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Confirm Delete</h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to delete "{postToDelete.title}"? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={deletePost}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
