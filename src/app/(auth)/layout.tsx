"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  { href: "/", name: "Home" },
  { href: "/register", name: "Register" },
  { href: "/login", name: "Login" },
];



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <>
      {navlinks.map((link, index) => {
        const isActive = pathname.startsWith(link.href) ;
        return (
        <Link key={index} href={link.href}
          className={`m-2 ${isActive ? "font-bold" : "text-blue-500"}`}>
            {link.name}
        </Link>
      )})}
        {children}
    </>
  );
}
