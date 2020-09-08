import React, { useEffect } from "react";
import { useAnyKeyToRender } from "./../hooks";

export default function WordCount({ children = "", hola = "", casa }) {
  useAnyKeyToRender();

  const words = children.split(" ");

  useEffect(() => {
    console.log("fresh render");
  }, [words]);

  return (
    <>
      <p>{hola}</p>
      <p>{children}</p>
      <p>{casa}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
}
