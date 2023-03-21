import React from "react";
import { Card } from "./Card";
import { LIST_SIZE } from "./CardContainer";
import "./loader.css";

export const Loader = () => {
  return (
    <>
      {Array(LIST_SIZE)
        .fill(0)
        .map((e, i) => {
          return <Card key={i} loading={true} />;
        })}
    </>
  );
};
