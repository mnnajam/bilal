import React from "react";

function Footer() {
  return (
    <div className=" py-8 bg-zinc-800  ">
      <div className="flex flex-col justify-center items-center space-y-4 ">
        <div className="">
          <h1 className="text-2xl  text-white    border-solid border-b-2 border-blue-500  ">
            Headquarters
          </h1>
        </div>

        <div className=" flex flex-col text-gray-500 items-center  space-y-4">
          <p>
            F21 Expressway London, 1 Dock Road, Dockside, London E16 1AH, United
            Kingdom
          </p>
          <p>
            Tel.+44(0)203 475 55 44&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;
            contactus@maplinworld.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;