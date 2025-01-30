"use client"
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: string;
  };
};



export default function ProductDetails({ params }: Props) {
  if(!/^\d+$/.test(params.productId))
    throw new Error("Id should be number")

  if(parseInt(params.productId)>100)
    notFound()

  return (
    <>
      <h1>Products Details {params.productId}</h1>
    </>
  );
}