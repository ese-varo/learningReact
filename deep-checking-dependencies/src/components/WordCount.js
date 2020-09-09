import React, { useEffect, useMemo, useCallback } from "react";
import { useAnyKeyToRender } from "./../hooks";

export default function WordCount({ children = "", hola = "", casa }) {
  useAnyKeyToRender();

  const words = useMemo(() => children.split(" "), [children]);

  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

  useEffect(() => {
    console.log(`hey these are the words array: ${words}`);
    console.log("fresh render function test");
    fn();
  }, [fn]);

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
