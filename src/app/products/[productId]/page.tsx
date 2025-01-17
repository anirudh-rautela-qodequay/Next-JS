"use client"

import { notFound } from "next/navigation";

type Props = {
  params: { productId: string };
};



export default function ProductDetails({ params }: Props) {
  if(parseInt(params.productId)>100)
    notFound()

  return (
    <>
      <h1>Products Details {params.productId}</h1>
    </>
  );
}
