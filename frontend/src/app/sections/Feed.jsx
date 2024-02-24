import Image from "next/image";
import React from "react";
import CommentSection from "../components/CommentSection";
import Button from "../components/Button";

const Feed = ({ title, description, deletePost }) => {
  return (
    <div className="w-[800px] h-fit p-5 border border-gray-300 rounded-3xl mx-10 bg-[#323232] mb-10">
      <div className="px-5 justify-between flex text-white items-center">
        <div className="flex text-white items-center">
          <img
            className=" h-[50px] w-[50px] overflow:hidden rounded-full"
            src="../assets/LogoAv.jpg"
            alt="logo"
          />
          <h className="ml-3 mt-4 text-xl">Anonymous</h>
        </div>
        <Button
          label={"Delete"}
          bgColor={"white"}
          textColor={"black"}
          onClick={deletePost}
        ></Button>
      </div>

      <div className="pl-20 text-white ">
        <h1 className="text-2xl font-bold mt-4 mb-2">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <CommentSection />
    </div>
  );
};

export default Feed;
