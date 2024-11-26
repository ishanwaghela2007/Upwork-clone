import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dashboard as DashboardIcon,
  People,
  Work,
  Settings,
  ExitToApp,
  Menu as MenuIcon
} from '@mui/icons-material';

const Dashnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = useMemo(() => [
    {
      to: '/admin/dashboard',
      icon: DashboardIcon,
      label: 'Dashboard',
      className: 'text-gray-700 hover:bg-gray-100'
    },
    {
      to: '/admin/users',
      icon: People,
      label: 'Users', 
      className: 'text-gray-700 hover:bg-gray-100'
    },
    {
      to: '/admin/projects',
      icon: Work,
      label: 'Projects',
      className: 'text-gray-700 hover:bg-gray-100'
    },
    {
      to: '/admin/settings',
      icon: Settings,
      label: 'Settings',
      className: 'text-gray-700 hover:bg-gray-100'
    },
    {
      to: '/admin',
      icon: ExitToApp,
      label: 'Logout',
      className: 'text-red-600 hover:bg-red-50'
    }
  ], []);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button 
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg md:hidden hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`h-0.5 w-full bg-gray-600 transform transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-full bg-gray-600 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`h-0.5 w-full bg-gray-600 transform transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Navigation Sidebar */}
      <nav className={`bg-white shadow-lg fixed left-0 top-0 h-full w-64 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}>
        <div className="p-4">
          <Link to="/admin/dashboard" className="flex items-center space-x-2 mb-8" onClick={closeMenu}>
            <span className="text-xl font-bold text-gray-800">Admin Dashboard</span>
          </Link>

          <div className="space-y-4">
            {navLinks.map(({ to, icon: Icon, label, className }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center space-x-3 px-4 py-2 ${className} rounded-lg transition-colors duration-200`}
                onClick={closeMenu}
              >
                <Icon />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for closing menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeMenu}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
        />
      )}
    </>
  );
};

export default Dashnav;
