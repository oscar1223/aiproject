import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const isLoggedIn = false // TODO: estado real

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="text-3xl font-bold text-blue-600 tracking-tight">
          WENXANGPT
        </Link>

        <nav className="flex items-center gap-3">
          {isLoggedIn ? (
            <button
              onClick={() => {}}
              className="px-4 py-2 rounded-xl bg-red-500 text-white text-sm font-medium shadow hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-medium shadow hover:bg-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-xl bg-gray-100 text-gray-900 text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
