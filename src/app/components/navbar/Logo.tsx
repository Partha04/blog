"use client"
import Image from "next/image";
import React from "react";
type Props = {
  size: number;
};

const Logo = (props: Props) => {
  return (
    <Image
      src={"./logo.svg"}
      alt="logo"
      width={props.size}
      height={props.size}
    />
  );
};

export default Logo;
