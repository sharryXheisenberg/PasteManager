import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { pasteSlice, updateToPastes } from '../redux/pasteSlice';



import { useDispatch, useSelector } from 'react-redux';
import { addToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state)=> state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0];

  return (
    <div className="container mx-auto px-4 max-w-4xl"> {/* Added container class */}
     <div className="flex flex-row gap-7 justify-between items-center w-full"> {/* Improved flex properties */}
        <input
          className="p-2 rounded-2xl mt-2 w-[60%] pl-4 flex-grow" 
          type="text"
          placeholder="Enter title here"
          value={paste?.title || ''} 
          disabled
        />
      </div>
      <div className="mt-8 w-full"> {/* Added full width */}
        <textarea
          className="rounded-2xl mt-4 w-full min-h-[400px] p-4" 
          value={paste.content}
          placeholder="Enter content here"
          disabled
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste;