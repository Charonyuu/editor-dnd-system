import React from "react";
import Image from "next/image";
import Navbar from "./(home)/Navbar";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Image
        width={300}
        height={300}
        src="/whiteFullLogo.png"
        alt="logo image"
      />
    </div>
  );
}
