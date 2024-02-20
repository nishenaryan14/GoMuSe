import React, { useState, useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";

const Upload = ({ onUpload }) => {
  const [err, setErr] = useState(false);

  useEffect(() => {
    const handleUpload = (e) => {
      setErr(false);
      const file = e.target.files[0];
      if (file) {
        const fileName = file.name;
        const fileExt = fileName.split(".").pop().toLowerCase();
        if (["mp3", "wav", "ogg"].includes(fileExt)) {
          console.log("Valid audio file");
          const reader = new FileReader();
          reader.onload = () => {
            console.log("Audio file uploaded and stored:", fileName);
            onUpload(fileName, reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          console.log("Not a valid audio file");
          setErr(true);
        }
      }
    };

    const uploadInput = document.getElementById("upload");
    uploadInput.addEventListener("change", handleUpload);

    return () => {
      uploadInput.removeEventListener("change", handleUpload);
    };
  }, [onUpload]);

  return (
    <div className="uploadContainer">
      <p className="uploadLabel">Add New Song</p>
      <label htmlFor="upload">
        <FaCirclePlus
          style={{ cursor: "pointer", fontSize: "36px", color: "white" }}
        />
      </label>
      <input type="file" id="upload" />
      {err && <p>Enter a Valid Audio File Type</p>}
    </div>
  );
};

export default Upload;
