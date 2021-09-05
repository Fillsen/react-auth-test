import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../redux/api/users";

export const Header = () => {
  const isAuth = useSelector((state) => state.users.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth) {
      dispatch(auth());
    }
  }, [dispatch, isAuth]);

  return (
    <nav className='bg-gray-100'>
      <div className="max-w-6xl mx-auto px-4">
        <div className='flex justify-between'>
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="mr-4">
              <Link
                to="/"
                className='flex items-center py-5 px-2 text-gray-700 hover:text-gray-900'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                </svg>
                <span>Trello Clone</span>
              </Link>
            </div>
            {/* Logo end */}
            {/* Menu */}
            <div className='hidden md:flex items-center space-x-1'>
              <a
                href='https://github.com/Fillsen'
                target='_blank'
                rel='noreferrer'
                className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                Git Project
              </a>
              <a
                href='https://tlgg.ru/Fillsen'
                target='_blank'
                rel='noreferrer'
                className='py-5 px-3 text-gray-700 hover:text-gray-900'>
                Contact me
              </a>
            </div>
            {/* Menu end */}
          </div>
          {/* Auth buttons */}
          {isAuth ? (
            <div className='hidden'>You authorized</div>
          ) : (
            <div className='hidden md:flex items-center space-x-3'>
              <Link className='py-5 px-3' to='/login'>Login</Link>
              <Link
                to='/register'
                className='py-2 px-3 bg-blue-400 text-white rounded hover:bg-blue-500 transition duration-300'>
                Signup
              </Link>
            </div>
          )}
          {/* Auth buttons end */}
          {/* Mobile Nav */}
          <div className='md:hidden flex items-center'>
            <button className='mobile-menu-button'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className='mobile-menu hidden'>
        <a
          className='block py-2 px-4 text-sm hover:bg-gray-200'
          href='https://github.com/Fillsen'
          target='_blank'
          rel='noreferrer'>
          Git Project
        </a>
        <a
          className='block py-2 px-4 text-sm hover:bg-gray-200'
          href='https://tlgg.ru/Fillsen'
          target='_blank'
          rel='noreferrer'>
          Contact me
        </a>
      </div>
    </nav>
  );
};