import React from 'react'
import logo from '../assets/Images/logo.jpg'
import { User, Lock } from "lucide-react";

const LoginPage = () => {
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
        {/* Login Form */}
        <form className="mt-8 space-y-5">
          {/* UserName */}
          <div className="relative">

            <User className="absolute left-4 h-4 w-4 mt-3 text-gray-400"/>
            
            <input
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-green-700 focus:ring-2 focus:ring-green-200"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-4 mt-3 h-4 w-4 text-gray-400" />
            <input
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
            type="submit"
            className="w-full bg-green-900 text-white py-3 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
