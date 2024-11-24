import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dashboard as DashboardIcon,
  People,
  Work,
  Settings,
  ExitToApp
} from '@mui/icons-material';

const Dashnav = () => {
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
    <nav className="bg-white shadow-lg fixed left-0 top-0 h-full w-64">
      <div className="p-4">
        <Link to="/admin/dashboard" className="flex items-center space-x-2 mb-8">
          <span className="text-xl font-bold text-gray-800">Admin Dashboard</span>
        </Link>

        <div className="space-y-4">
          {navLinks.map(({ to, icon: Icon, label, className }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center space-x-3 px-4 py-2 ${className} rounded-lg transition-colors duration-200`}
            >
              <Icon />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Dashnav;
