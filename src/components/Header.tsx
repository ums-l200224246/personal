import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Search, Menu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            ModernBlog
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Home
              </Link>
              <Link to="/blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Blog
              </Link>
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-400 cursor-pointer" />
              <ThemeToggle />
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Home</Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Blog</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 dark:text-gray-300">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}