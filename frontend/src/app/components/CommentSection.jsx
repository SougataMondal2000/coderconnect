import Button from "./Button";

const CommentSection = () => {
  return (
    <div>
      <div className="flex justify-start items-center p-5 gap-4">
        <div className="">
          <img
            className=" h-[40px] w-[50px] overflow:hidden rounded-full"
            src="../assets/LogoAv.jpg"
            alt="logo"
          />
        </div>

        <div className="w-full">
          <input
            type="text"
            placeholder="Add a comment..."
            className=" border-b-2 outline-none w-full"
          />
        </div>
        <Button
          label={"Comment"}
          bgColor={"#14F713"}
          textColor={"black"}
        ></Button>
      </div>
      <div></div>
    </div>
  );
};

export default CommentSection;
