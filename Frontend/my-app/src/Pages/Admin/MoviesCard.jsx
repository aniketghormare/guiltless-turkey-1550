import React from "react";
import styled from "styled-components";

const Card = ({
  id,
  name,
  avatar,
  genre,
  price,
  category,
  type,
  handleDelete,
  handleEdit,
}) => {
  return (
    <DIV class="flex flex-row justify-between items-center bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
      <img className="img" src={avatar} alt="img-blur-shadow" />
      <div className="flex w-full flex-row justify-between items-center mr-auto">
        <h1 className="mb-2 w-30 mx-3 block font-sans text-md font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h1>
        <div className="type">
          <p>{genre}</p>
          <p>{category}</p>
        </div>
        <p className="imgDec">Type: {type}</p>
        <div className="price"> Price: ${price}</div>
      </div>
      <div className="button">
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="del"
        >
          Delete
        </button>
        <button
          onClick={() => {
            handleEdit(id);
          }}
          className="edit"
        >
          Edit
        </button>
      </div>
    </DIV>
  );
};

export default Card;

const DIV = styled.div`
  background-color: whitesmoke;
  grid-template-columns: repeat(3, 1fr);
  //border: 3px solid red;
  width: 90%;
  height: 80%;
  padding: 5px;
  gap: 10px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h1 {
    color: #363030;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
  .type {
    display: flex;
    flex-direction: row;
    gap: 25%;
    line-height: 0%;
    //border: 1px solid blue;
    color: #527e70;
    margin: auto;
    justify-content: center;
  }
  .img {
    width: 30%;
    height: 30%;
  }
  .imgDec {
    //border: 1px solid black;
    width: 70%;
    align-items: center;
    justify-content: center;
    margin: auto;
    color: white;
    font-size: larger;
    font-family: "Courier New", Courier, monospace;
    font-weight: 600;
    border-radius: 5px;
    background-image: linear-gradient(red, #90909c);
  }
  .price {
    //border: 1px solid black;
    width: 35%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 15px;
    color: #731313;
    font-size: large;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-weight: 700;
    background-image: linear-gradient(#90909c, #6fc069);
    border-radius: 5px;
    padding: 3px;
  }
  .button {
    display: flex;
    justify-content: center;
    margin: 10px;
    gap: 30px;
  }
  .del {
    background-color: red;
    width: 60px;
    height: 30px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    color: white;
    font-weight: 600;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  .edit {
    background-color: #698d69;
    width: 60px;
    height: 30px;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    color: white;
    font-weight: 600;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
`;
