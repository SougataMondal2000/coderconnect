"use client";
import Image from "next/image";
import Feed from "../sections/Feed";
import Profile from "../sections/Profile";
import Button from "../components/Button";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  const [postData, setpostData] = useState([]);
  const [postsTitle, setPostsTitle] = useState();
  const [postsDesc, setPostsDesc] = useState();

  const handleAdd = () => {
    if (!postsTitle || !postsDesc) {
      alert("Title and description cannot be empty");
      return;
    }
    axios
      .post("http://localhost:5000/add", {
        title: postsTitle,
        desc: postsDesc,
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err, "Can't post data!"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((response) => {
        setpostData(response.data);
      })
      .catch((err) => {
        console.log(err, "Can't fetch data!");
      });
  }, []);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/delete/" + id)
      .then(() => window.location.reload())
      .catch((err) => console.log(err, "Can't delete data!"));
  };
  console.log(postsTitle, postsDesc);
  return (
    <main className="h-[100vh]">
      <nav className="flex justify-between items-center px-40 py-5">
        <h1 className="text-[#14F713] text-2xl font-bold ">CoderConnect</h1>
        <Button label={"Log in"} bgColor={"white"} textColor={"black"}></Button>
      </nav>
      <section className="ml-44 flex">
        <div>
          <Profile />
          <div className="mb-10 flex justify-center items-center">
            <Button
              label={"Create Post"}
              bgColor={"white"}
              textColor={"black"}
              onClick={handleModal}
            ></Button>
          </div>
          {modal === true && (
            <section>
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
                <section>
                  <div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen z-60">
                    <div className="p-20 rounded-lg shadow-md bg-white">
                      <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-semibold mb-4">Title</h2>
                      </div>
                      <input
                        type="text"
                        onChange={(e) => setPostsTitle(e.target.value)}
                        className="w-full mb-4 border rounded-md p-2"
                      />
                      <h2 className="text-2xl font-semibold mb-4">
                        Description
                      </h2>
                      <input
                        type="text"
                        onChange={(e) => setPostsDesc(e.target.value)}
                        className="w-full h-20 mb-4 border rounded-md p-2"
                      />
                      <div className="flex justify-center items-center">
                        <Button
                          onClick={handleAdd}
                          label={"Post"}
                          bgColor={"#14F713"}
                          textColor={"black"}
                        ></Button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </section>
          )}
        </div>
        {postData?.length > 0 && (
          <section className="h-[85vh] mt-10 scrollbar-thin overflow-y-scroll">
            {postData?.map((item) => (
              <Feed
                key={item._id}
                title={item.title}
                description={item.desc}
                deletePost={() => handleDelete(item._id)}
              />
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
