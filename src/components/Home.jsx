import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const pasteId = searchParams.get('pastedId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

 

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
    } else {
      dispatch(addToPastes(paste));
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Paste Manager</h1>
        <div className="flex space-x-6">
          {/* <a href="/" className="text-lg font-semibold hover:text-gray-300 transition">
            Home
          </a> */}
          {/* <a href="/pastes" className="text-lg font-semibold hover:text-gray-300 transition">
            Pastes
          </a> */}
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-md p-6 text-black">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            className="p-2 border rounded-lg flex-grow outline-none focus:ring focus:ring-indigo-300"
            type="text"
            placeholder="Enter title here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button
            onClick={createPaste}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {pasteId ? 'Update My Paste' : 'Create My Paste'}
          </button>
        </div>

        <textarea
          className="w-full mt-6 p-3 border rounded-lg outline-none focus:ring focus:ring-indigo-300"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={10}
        />
      </div>
    </div>
  );
};

export default Home;
