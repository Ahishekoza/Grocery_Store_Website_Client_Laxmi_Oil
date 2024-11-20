import React from "react";

export const metadata = {
  title: "sign-in/sign-up",
  description: "Ambika is one of the most popular grocery providers in Japan.",
};

const AuthLayout = ({ children }) => {
  return (
    <div className="h-full w-full flex justify-center items-center container mx-auto px-5 sm:px-10 lg:px-20  py-5">
      {children}
    </div>
  );
};

export default AuthLayout;
