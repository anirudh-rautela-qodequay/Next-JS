import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>
        <Link href={"/"}>Home</Link>
      </h2>
      <h3> Product Features</h3>
      {children}
    </>
  );
}
