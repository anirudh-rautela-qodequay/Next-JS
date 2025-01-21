"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleClick() {
    console.log("Button Clicked")
    // router.push("/register")
    // router.replace("/login")
    // router.back()
    router.forward()
  }

  return (
    <>
    <h1>Order</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
