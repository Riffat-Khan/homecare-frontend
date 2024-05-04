import React, { useState } from 'react';
import UploadIcon from '@mui/icons-material/Upload';

function FileUpload({label}) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
  };

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
        />
        <div className='bg-black p-3  border-2 border-white rounded-md hover:bg-blue-700'>
        <UploadIcon />
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-white font-bold py-2 px-4 rounded"
        >
          {label}
        </label>
        </div>
        {selectedFile && (
          <div className="mt-2">
            <p className="text-sm">{selectedFile.name}</p>
            <button
              onClick={handleUpload}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
