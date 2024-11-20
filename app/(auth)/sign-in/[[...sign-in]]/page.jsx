import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="py-20">
      <SignIn />
    </div>
  );
};

export default SignInPage;
