import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiAdminLine } from "react-icons/ri";

const AdminNavbar = () => {
  //   const total = useSelector(state=> state.dataReducer.total)
  //   console.log(total)
  return (
    <DIV className="text-white w-full flex m-5 ">
      <h2 className="mx-5 px-9 py-3 rounded-xl bg-orange-600"> Movies</h2>
      <h2 className="mx-5 px-9 py-3 rounded-xl bg-orange-600"> Games</h2>
      <h2 className="mx-5 px-9 py-3 rounded-xl bg-orange-600">About</h2>
      <p className="Admin">
        {" "}
        <RiAdminLine style={{ fontSize: "30px" }} /> Admin{" "}
      </p>
    </DIV>
  );
};

export default AdminNavbar;

const DIV = styled.div`
  display: flex;
  flex-direction: row;
  background-color: wheat;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  .Admin {
    margin-left: 66%;
    font-size: large;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
  }
  h2 {
    margin: 20px;
    background-color: aqua;
    border-radius: 3px;
    width: 90px;
    height: 35px;
    /* border: 1px solid black; */
    cursor: pointer;
  }
`;
