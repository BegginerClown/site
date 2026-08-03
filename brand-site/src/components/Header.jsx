import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Header() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Главная' },
    { path: '/about', label: 'О бренде' },
    { path: '/workshops', label: 'Мастер-классы' },
    { path: '/contacts', label: 'Контакты' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-[#D4A574] rounded-full flex items-center justify-center">
              <span className="font-philosopher font-bold text-white text-xl">Л</span>
            </div>
            <span className="font-philosopher font-bold text-2xl hidden md:block">Лаборатория Уюта</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-inter font-normal transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-[#D4A574] font-medium'
                    : 'text-gray-700 hover:text-[#D4A574]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
