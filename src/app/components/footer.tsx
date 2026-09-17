import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} - Designed <span className='font-sans'>&</span> coded by <span><a href='https://www.linkedin.com/in/marc-cervantes-garcia/'>Marc Cervantes Garcia</a></span>
      <br />Play my IA games <a href='https://games.marccervantes.com' rel='noopener noreferrer' className='text-blue-500 sunderline'>here</a>
    </footer>
  );
};

export default Footer;
