import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="bg-[#323232] w-[400px] rounded-3xl pl-4 pr-4 m-10 object-cover h-fit">
      <div className="overflow-hidden w-full flex justify-center pt-10 pb-4">
        <img
          className="rounded-full object-cover h-[150px] w-[150px]"
          src="https://images.unsplash.com/photo-1708035392101-b8e8fed39524?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="text-center text-white  p-3">
        <p className="font-bold">Anonymous</p>
        {/* <p>Interest</p> */}
      </div>
      <div className="text-white p-4 item-center flex  w-full">
        <p className="w-[80%]">Posts</p>
        <p>245</p>
      </div>
      <div className="text-white p-4 item-center flex ">
        <p className="w-[80%]">Comments</p>
        <p>45</p>
      </div>
      <div className="text-white p-4">
        <p>Bio</p>
        <p className="text-sm pt-2 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          repellendus, dolor accusantium minus obcaecati praesentium facilis
          assumenda deserunt quod debitis id cupiditate tenetur fugiat maxime?
          Nostrum repudiandae impedit animi veritatis!
        </p>
      </div>
    </div>
  );
};

export default Profile;
