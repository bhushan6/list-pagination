import "./App.css";
import { useState } from "react";
import { CardContainer, PaginationButtons } from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="App"
      style={{
        padding: "2rem 4rem",
        background: "#EAF0FF",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          padding: "2rem",
          borderRadius: "20px",
          background: "#fff",
        }}
      >
        <h1 style={{ fontSize: "4rem", margin: "0 1rem 1rem 0" }}>Users</h1>
        <CardContainer
          loading={loading}
          setLoading={setLoading}
          currentPage={currentPage}
        />
        <PaginationButtons
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
