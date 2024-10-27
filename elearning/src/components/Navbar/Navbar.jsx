import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faSearch, faUser, faCaretDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    alert('Çıkış yapılıyor...');
    // Çıkış işlemi burada yapılabilir
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-profile') && !event.target.closest('.sidebar')) {
        setIsDropdownOpen(false);
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between p-6 bg-yellow-300 text-white relative w-full h-16">
        {/* Left section: Icon and title */}
        <div className="flex items-center">
          <FontAwesomeIcon icon={faDesktop} className="mr-2" />
          <span className="text-lg font-bold">E-Learning</span>
        </div>

        {/* Center section: Search bar */}
        <div className="flex-1 text-center">
          <div className="relative w-3/4 mx-auto">
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-2.5 text-yellow-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 p-2 rounded-md border border-yellow-500 placeholder-yellow-700 text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        {/* Right section: Navigation and profile */}
        <div className="flex gap-4 items-center">
          <a href="/" className="cursor-pointer hover:text-yellow-800">Home</a>
          <Link to="/forstudents" className="cursor-pointer hover:text-yellow-800">For Students</Link>
          <Link to="/resources" className="cursor-pointer hover:text-yellow-800">Resources</Link>
          <Link to="/aboutus" className="cursor-pointer hover:text-yellow-800">About Us</Link>
          <Link to="/contact" className="cursor-pointer hover:text-yellow-800">Contact</Link>

          {/* Profile and dropdown */}
          <div className="relative navbar-profile" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faUser} className="mr-1" />
            <FontAwesomeIcon icon={faCaretDown} />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg p-3 z-10">
                <p className="font-semibold">İsim Soyisim</p>
                <p
                  onClick={logout}
                  className="cursor-pointer mt-2 text-red-600 hover:underline"
                >
                  Sign Out
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-yellow-300 text-white relative">
        <FontAwesomeIcon icon={faDesktop} className="mr-2" />
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className="cursor-pointer" />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-yellow-400 shadow-lg z-20 transition-transform transform duration-300 ease-in-out translate-x-0">
          <div className="flex flex-col p-4">
            <button
              className="self-end text-red-600 hover:text-red-800 mb-4"
              onClick={toggleSidebar}
            >
              X
            </button>
            <a href="/" className="cursor-pointer hover:text-yellow-800 py-2 border-b border-yellow-300" onClick={toggleSidebar}>Home</a>
            <a href="/forstudents" className="cursor-pointer hover:text-yellow-800 py-2 border-b border-yellow-300" onClick={toggleSidebar}>For Students</a>
            <a href="/resources" className="cursor-pointer hover:text-yellow-800 py-2 border-b border-yellow-300" onClick={toggleSidebar}>Resources</a>
            <a href="/aboutus" className="cursor-pointer hover:text-yellow-800 py-2 border-b border-yellow-300" onClick={toggleSidebar}>About Us</a>
            <a href="/contact" className="cursor-pointer hover:text-yellow-800 py-2 border-b border-yellow-300" onClick={toggleSidebar}>Contact</a>
            <div className="mt-auto">
              <FontAwesomeIcon icon={faUser} className="mr-1" />
              <p onClick={logout} className="cursor-pointer text-red-600 hover:underline">Sign Out</p>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar close animation */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};
