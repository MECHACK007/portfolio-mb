import { Fragment } from "react";

/** Splits a title into unbreakable words so compound words like "E-Commerce" never wrap at the hyphen. */
export function keepWords(text: string) {
  const words = text.split(" ");
  return words.map((word, index) => (
    <Fragment key={index}>
      <span className="whitespace-nowrap">{word}</span>
      {index < words.length - 1 ? " " : null}
    </Fragment>
  ));
}
