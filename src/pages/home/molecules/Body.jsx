import React from "react";
import DialogModal from "../../../modals/dialog/DialogModal";
import SignIn from "../../signIn/SignIn";
import SignUp from "../../signUp/SignUp";

const Body = () => {
  return (
    <div className=" flex flex-col w-full mt-24">
      <h1 className="font-bold text-7xl">
        WELCOME TO <span className="bg-primary ">HOME CARE</span>
      </h1>
      <p className="font-base text-4xl py-10 ">Let's Get Started</p>
      <div className="text-start">
        <p>Already have an account?</p>
        <DialogModal sign={"Sign In"} route={<SignIn />} />
      </div>
      <div className="text-end">
        <p>Don't have an account?SignUp</p>
        <DialogModal sign={"Sign Up"} route={<SignUp />} />
      </div>
    </div>
  );
};

export default Body;
