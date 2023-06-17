import AdminNavbar from "./AdminNavbar";
import data from "../../db";
import Card from "./MoviesCard";
import styled from "styled-components";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <DIV>
        {data.map((el) => (
          <Card {...el} />
        ))}
      </DIV>
    </div>
  );
};
export default Admin;

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //border: 1px solid black;
`;
