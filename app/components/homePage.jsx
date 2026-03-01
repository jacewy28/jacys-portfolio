import React from 'react';

export default function homePage() {
  return (
    <div className="p-10 border rounded-xl shadow-md max-w-sm">
      <h2 className="text-2xl font-bold">Jacy Fu</h2>
      <a href="/projects" className="p-4 mt-4 inline-block text-white-500 hover:underline">
        projects 
      </a>
      <a href="/contact" className="p-4 mt-4 inline-block text-white-500 hover:underline">
        contact 
        </a>
        <a href="/about" className="p-4 mt-4 inline-block text-white-500 hover:underline">
        about 
        </a>
    </div>
  );
}