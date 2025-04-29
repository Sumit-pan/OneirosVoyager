import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCredentials } from '../types/index';
import '../styles/login.css';

const AdminLogin: React.FC = () => {
  const [credentials, setCredentials] = useState<UserCredentials>({ username: '', password: '' });
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate API delay

      if (credentials.username === 'admin' && credentials.password === 'admin123') {
        localStorage.setItem('adminAuth', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="admin-login-page ">
      <div className="login-container ">
        <h2 className="login-title ">
          Admin Login
        </h2>

        {error && (
          <div className="login-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={credentials.username}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="form-input "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`login-button' : ''
            }`}
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>

        <p className="login-note">
          This is a secure area. Unauthorized access is prohibited.
        </p>
      </div>
    </main>
  );
};

export default AdminLogin;
