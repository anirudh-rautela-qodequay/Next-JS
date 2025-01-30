"use client";
export default function ErrorBoundary({error}:{
    error: Error
}){
    return(
        <>
        <h1>Error</h1>
        <h4>{error.message}</h4>
        </>
    )
}