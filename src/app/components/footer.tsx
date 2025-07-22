import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} MySite. All rights reserved.
    </footer>
  );
};

export default Footer;
