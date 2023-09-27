import React from "react";
import { useRouter } from "next/router";

const Name = () => {
  const router = useRouter();
  console.log(router.query);

  return <div>{router.query.name}</div>;
};

export default Name;
