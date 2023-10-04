import React from "react";
import { useState } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-green-300">
      <div className="grid sm:grid-cols-4 sm:grid-rows-1 grid-cols-2 grid-rows-2 mx-auto w-80 h-24">
        <Link className="flex self-center justify-self-start" href={`/`}>
          {/* <img className="w-2/12 mx-1" src={"/img/icon_home.png"} /> */}
          <div className=" text-white text-sm">ホーム</div>
        </Link>
        <Link className="flex self-center justify-self-start" href={`/recipe`}>
          {/* <img className="w-2/12 mx-1" src={"/img/icon_recipe.png"} /> */}
          <div className="text-white text-sm">レシピ</div>
        </Link>

        <Link className="flex self-center justify-self-start" href={`/column`}>
          {/* <img className="w-2/12 mx-1" src={"/img/icon_column.png"} /> */}
          <div className=" text-white text-sm ">コラム</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
