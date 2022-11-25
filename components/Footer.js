import Link from "next/link";

export default function Footer() {

  return (
    <footer className="flex flex-col items-center justify-center w-full h-24 bg-green-500 font-display">
      <h3 className=" text-gray-50">
        2022@ All Rights Reserved. 
      </h3>
      <p className="text-center text-white">
        Developed by 
        <a
          className="italic hover:text-neutral-200"
          href=""
        >
          {" "}
          Cheng Jie
        </a>
      </p>
    </footer>
  );
}
