"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { href: "/order", name: "Order" },
  { href: "/register", name: "Register" },
  { href: "/login", name: "Login" },
  { href: "/products", name: "Products" },
];

export default function Home() {
  const pathname = usePathname();
  return (
    <>
    <h1>Home</h1>
      {navlinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href) ;
        return (
        <Link key={index} href={link.href}
          className={`m-2 ${isActive ? "font-bold" : "text-blue-500"}`}>
            {link.name}
        </Link>
      )})}
    </>
  );
}
