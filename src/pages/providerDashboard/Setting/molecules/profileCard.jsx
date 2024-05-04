import React, { useState } from "react";
import profile from "../../../../assets/images/profile.png";

function ProfileCard() {
  const [imageSrc, setImageSrc] = useState(profile);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const changeProfile = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex flex-col gap-5 items-center p-5">
      <div className="flex justify-center rounded-full" onClick={changeProfile}>
        <img
          className="w-3/5 h-3/5 rounded-full bg-cover relative overflow-hidden"
          id="profileImage"
          src={imageSrc}
          alt="profileImage"
        />
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <button className="bg-[#314154] text-white font-bold py-2 px-4 mx-10 rounded" onClick={changeProfile}>
        Change Profile
      </button>
      <p className="text-2xl ">USERNAME</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
  );
}

export default ProfileCard;
