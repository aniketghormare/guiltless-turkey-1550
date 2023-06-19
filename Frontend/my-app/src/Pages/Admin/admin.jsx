import AdminNavbar from "./AdminNavbar";
//import data from "../../db";
import Card from "./MoviesCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const token = JSON.parse(localStorage.getItem("admintoken"))
  const [data, setdata] = useState([])
 const [count,setcount]=useState(0)
  const getdata = () => {
    fetch("https://aware-lime-caiman.cyclic.app/admingames", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    }).then((res) => {
      return res.json()
    }).then((data) => {
      setcount(count+1)
      console.log(data.game)
      setdata(data.game)
    }).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getdata()
  }, [count])
  return (
    <div>
      {/* <AdminNavbar /> */}
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
