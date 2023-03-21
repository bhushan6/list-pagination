import React from "react";
import "./pagination-button.css";

const Button = (props) => {
  const { children, ...rest } = props;

  return (
    <button className={"button"} {...rest}>
      {children}
    </button>
  );
};

export const PaginationButtons = ({
  currentPage = 0,
  setCurrentPage = () => {},
}) => {
  return (
    <div style={{ margin: "1rem 1rem 0 0", display: "flex" }}>
      <Button
        disabled={currentPage <= 0 ? true : false}
        onClick={() => setCurrentPage((currentPage) => currentPage - 1)}
      >
        Prev
      </Button>
      <h1 style={{ margin: "0 8px" }}>{currentPage}</h1>
      <Button onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>
        Next
      </Button>
    </div>
  );
};
