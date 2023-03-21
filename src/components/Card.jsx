import React from "react";
import "./card.css";

const aspect = 1011 / 637;
const width = 300;

export const Card = ({
  JobTitle = "Somthing",
  FirstNameLastName = "Som Thing",
  Phone = "+9-999-999-0000",
  Company = "Somthing",
  loading = false,
  Email = "something.somth@thing.com",
}) => {
  const loadingStyle = loading
    ? {
        background: "#666",
        borderRadius: "3px",
        color: "#666",
      }
    : {};

  return (
    <div
      className="card-wrapper"
      style={{
        width: `${width}px`,
        minHeight: `${width / aspect}px`,
      }}
    >
      <div style={{ width: "100%" }}>
        <p
          className={loading ? "info skeleton" : "info"}
          style={{
            ...loadingStyle,
          }}
        >
          {JobTitle} <span style={{ color: "#666", ...loadingStyle }}>at</span>{" "}
          {Company}
        </p>
      </div>
      <h1
        className={loading ? "skeleton" : ""}
        style={{ textAlign: "center", ...loadingStyle }}
      >
        {FirstNameLastName}
      </h1>
      <div
        style={{
          width: "100%",
          textAlign: "right",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            ...loadingStyle,
          }}
          className={loading ? "info skeleton" : "info"}
        >
          +{Phone}
        </p>
        <p
          style={{
            ...loadingStyle,
          }}
          className={loading ? "info skeleton" : "info"}
        >
          {Email}
        </p>
      </div>
    </div>
  );
};
