import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { FormatDate } from '../utils/formateDate';
import { FiEye, FiTrash2, FiCopy, FiShare2 } from 'react-icons/fi';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pastedId) => {
    dispatch(removeFromPastes(pastedId));
    toast.success('Paste deleted successfully!');
  };

  const handleShare = (paste) => {
    if (navigator.share) {
      navigator
        .share({
          title: paste.title,
          text: paste.content,
          url: window.location.href,
        })
        .then(() => {
          console.log('Content shared successfully!');
        })
        .catch((error) => {
          console.error('Error sharing content:', error);
        });
    } else {
      console.error('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className="p-5">
      <input
        className="p-2 rounded-2xl w-full max-w-lg border border-gray-300 shadow-sm"
        type="search"
        placeholder="Search here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="flex flex-col gap-5 mt-5">
        {filteredData.length > 0 &&
          filteredData.map((paste) => (
            <div
              key={paste?._id}
              className="border p-4 rounded-lg shadow-md bg-white flex flex-col gap-3"
            >
              <div className="font-bold text-lg">{paste.title}</div>
              <div className="text-gray-600">{paste.content}</div>

              <div className="flex flex-wrap gap-4 mt-3 justify-between items-center">
                <div className="flex gap-2">
                  <a
                    href={`/pastes/${paste?._id}`}
                    className="text-blue-600 flex items-center gap-1"
                  >
                    <FiEye /> View
                  </a>
                </div>
                <div className="flex gap-3">
                  <button
                    className="text-red-600 flex items-center gap-1"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    <FiTrash2 /> Delete
                  </button>
                  <button
                    className="text-green-600 flex items-center gap-1"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success('Copied to clipboard');
                    }}
                  >
                    <FiCopy /> Copy
                  </button>
                  <button
                    className="text-purple-600 flex items-center gap-1"
                    onClick={() => handleShare(paste)}
                  >
                    <FiShare2 /> Share
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                {FormatDate(paste?.createdAt)}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Paste;
