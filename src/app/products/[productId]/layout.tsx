import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};


export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${params.productId}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

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
