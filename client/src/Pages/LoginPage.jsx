import React, { useState } from 'react'
import logo from '../assets/Images/logo.jpg'
import { User, Lock, Loader } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  // const [error, setError] = useState(null)
  
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    setSubmitting(true);
    try {
      const success = await login({ email, password });
      if (success) {
        navigate('/dashboard')
      }
    } catch {
      // login reports authentication errors through AuthContext.
    } finally {
      setSubmitting(false);
    }
  }

  
  
 
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        {/*logo */}
        <div className="flex justify-center mb-6 h-28">
          <img src={logo} alt="logo" />
        </div>
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Sign in to your account</p>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          {/* UserName */}
          <div className="relative">

            <User className="absolute left-4 h-4 w-4 mt-3 text-gray-400"/>
            
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 mt-3 h-4 w-4 text-gray-400" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200"
            />
          </div>
          {/* Remember */}
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-green-700 w-4 h-4"
              />
              <span className="text-gray-700">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-blue-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            disabled={!email || !password}
            type="submit"
            className={`w-full bg-green-900 text-white py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 *: ${!email || !password ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {submitting ? <Loader className="animate-spin" /> : null}
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
