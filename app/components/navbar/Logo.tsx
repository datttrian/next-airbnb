"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Logo = () => {
  return (
    <Image
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      width={100}
      height={100}
      alt="logo"
    />
  )
}

export default Logo
