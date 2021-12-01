import React from 'react';
import useDarkMode from '../../themes/useDarkMode';

const ThemeSwitch = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const changeTheme = () => {
    colorTheme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <div className='flex'>
      <button className='p-5' onClick={() => changeTheme()}>
        {colorTheme === 'light' ? (
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='black'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        ) : (
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitch;
