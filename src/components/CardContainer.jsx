import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Loader } from "./Loader";

export const LIST_SIZE = 10;

export const CardContainer = ({
  currentPage = 0,
  setLoading = () => {},
  loading = true,
}) => {
  const [list, setList] = useState([]);

  const getUsers = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://give-me-users-forever.vercel.app/api/users/${
          page * LIST_SIZE
        }/next`
      );
      const data = await response.json();
      if (Array.isArray(data.users)) {
        const filteredData = data.users.splice(0, 10);
        setList(filteredData);
        setLoading(false);
        return filteredData;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
    setList([]);
    return [];
  };

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
      }}
    >
      {list?.map((ele) => {
        return (
          <Card
            key={ele.ID}
            id={ele.ID}
            JobTitle={ele.JobTitle}
            Phone={ele.Phone}
            Company={ele.Company}
            FirstNameLastName={ele.FirstNameLastName}
            Email={ele.Email}
          />
        );
      })}
    </div>
  );
};
