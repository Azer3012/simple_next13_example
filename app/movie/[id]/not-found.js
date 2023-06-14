import Link from "next/link";
import React from "react";

const MovieNotFound = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>We couldnt find the movie you looking for</h1>

      <Link
        href={"/"}
        style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
      >
        Go Home
      </Link>
    </div>
  );
};

export default MovieNotFound;
