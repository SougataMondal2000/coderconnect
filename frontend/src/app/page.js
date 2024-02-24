"use client";
import React, { useState } from "react";
import Button from "./components/Button";
import Image from "next/image";
import Link from "next/link";
import coding from "./assets/coding.jpg";
import Form from "./components/Form";

const page = () => {
  const [openForm, setOpenForm] = useState(false);
  const handleOpenForm = () => {
    setOpenForm(true);
  };
  return (
    <div className="h-[100vh]">
      <nav className="h-[10%] flex justify-between items-center px-40 py-5">
        <h1 className="text-[#14F713] text-xl font-bold">CoderConnect</h1>
      </nav>
      <section className="flex items-center justify-center h-[75%]">
        <div className="w-full flex justify-center items-start lg:px-32  p-5 flex-wrap lg:gap-28 md:gap-4 gap-28">
          <div className="lg:w-[600px] md:w-[400px]">
            <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold text-white">
              Unleash your coding potential
              <span className="text-[#14F713]">!</span>
            </h1>
            <p className="font-medium lg:text-base md:text-sm text-xs text-white lg:mt-4 lg:mb-6 my-4">
              Stay connnected and code smarter
            </p>
            {openForm === false && (
              <div className="flex items-center gap-2">
                <Link href="/home">
                  <Button
                    label="Get started"
                    bgColor={"#14F713"}
                    textColor={"black"}
                    // onClick={handleOpenForm}
                  ></Button>
                </Link>
              </div>
            )}
            {openForm === true && <Form />}
          </div>
          <div className="relative">
            <div className="absolute bg-[#14F713] rounded-3xl shadow-md lg:w-[350px] lg:h-[350px] md:w-[275px] md:h-[275px]"></div>
            <Image
              src={coding}
              alt=""
              width={350}
              height={350}
              className="rounded-3xl lg:w-[350px] lg:h-[350px] md:w-[275px] md:h-[275px] object-cover relative right-10 top-10"
            />
          </div>
        </div>
      </section>
      <footer className="h-[15%] bg-[#14F713] text-black w-full fixed bottom-0 flex justify-center items-center">
        <p>Sign up now to smoothen your coding journey!</p>
      </footer>
    </div>
  );
};

export default page;
