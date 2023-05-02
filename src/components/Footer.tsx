import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-stone-900 text-stone-50 flex justify-between items-center p-4">
      <ul className="flex">
        <li className="m-2 text-sm">Contact</li>
        <li className="m-2 text-sm">About us</li>
        <li className="m-2 text-sm">Privacy Policy</li>
      </ul>
      <div>
        <span className="text-sm">Made by Kent Jordan</span>
      </div>
    </div>
  );
};

export default Footer;
