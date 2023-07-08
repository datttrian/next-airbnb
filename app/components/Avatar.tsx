"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <div>
      <Image
        alt="Avatar"
        className="rounded-full"
        src="/images/placeholder.jpeg"
        width={30}
        height={30}
      />
    </div>
  );
};

export default Avatar;
