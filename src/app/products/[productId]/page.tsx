// "use client"
import { notFound } from "next/navigation";
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

export default function ProductDetails({ params }: Props) {
  if(isNaN(params.productId))
    notFound()

  if(parseInt(params.productId)>100)
    notFound()

  return (
    <>
      <h1>Products Details {params.productId}</h1>
    </>
  );
}