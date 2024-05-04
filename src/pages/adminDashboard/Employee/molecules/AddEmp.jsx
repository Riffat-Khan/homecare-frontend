import React, { useState } from "react";
import FileUpload from "./UploadDoc"

function AddEmployee({
  image,
  heading,
  subHeading,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  handleClose,
}) {
  const [VALUES, setValues] = useState({
    name: "",
    designation: "",
    phone: "",
    email: "",
    cnic: "",
    dob: "",
    gender: "",
    address: "",
    joiningDate: "",
    role: "employee",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      await postRequest("auth/register", VALUES);
      // const token = localStorage.getItem("token");
      // if (!token) {
      //   console.log("User is not logged in");
      //   return;
      // } else {
      //   const response = await postRequest("auth/login", VALUES);
      //   const data = response.body;
      //   console.log(data)
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-row gap-5  border-2 border-white  bg-[#314154] px-10 py-2">
      <div className="flex flex-col items-center mt-10 mb-5 mr-5 w-full text-white">
        <h1 className="sm:text-2xl lg:text-4xl font-extrabold">{heading}</h1>
        <h1 className="mt-5 sm:text-xl lg:text-2xl font-normal">
          {subHeading}
        </h1>
        <div className="grid grid-cols-2 grid-rows-3 gap-5 mt-10">
          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder={input1}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
          <input
            type="text"
            name="designation"
            onChange={handleInput}
            placeholder={input2}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
          <input
            type="text"
            name="department"
            onChange={handleInput}
            placeholder={input3}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
          <input
            type="text"
            name="phone"
            onChange={handleInput}
            placeholder={input4}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
          <input
            type="text"
            name="email"
            onChange={handleInput}
            placeholder={input5}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
          <input
            type="text"
            name="gender"
            onChange={handleInput}
            placeholder={input6}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
          <FileUpload label={"Upload Document"} />
          <input
            type="text"
            name="role"
            onChange={handleInput}
            value={VALUES.role}
            className="bg-black p-3 rounded-md border-2 border-white text-xl text-white"
          />
        </div>
        <div className="mt-5">
          <button
            onClick={handleClick}
            className="mr-5 border-2 rounded-lg text-[#314154] bg-white pt-2 pb-2 pl-10 pr-10"
          >
            Add
          </button>
          <button
            onClose={handleClose}
            className=" border-2 rounded-lg border-Neron bg-Neron pt-2 pb-2 pl-10 pr-10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
