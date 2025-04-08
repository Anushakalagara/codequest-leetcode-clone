import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">CodeVerse</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/problems">Problems</Link>
        <Link to="/submissions">Submissions</Link>
      </div>
    </nav>
  );
}
