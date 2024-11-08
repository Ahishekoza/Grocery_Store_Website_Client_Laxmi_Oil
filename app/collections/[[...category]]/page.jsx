"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Collections = ({ params }) => {
  const { category } = params;
  const router = useRouter();


  return <div className="px-10 md:px-20 py-5"> {category?  category : "All Products"} </div>;
};

export default Collections;
