"use client"
type Props = {
  params: { slug: string[] };
};
// length means items after slash
export default function Docs({ params }: Props) {
  if(params.slug.length === 2){
    return (
      <>
      <h1>Documentation for {params.slug[0]} and {params.slug[1]}</h1>
      </>
    )
  }
  return (
    <>
      <h1>Docs Page</h1>
    </>
  );
}
