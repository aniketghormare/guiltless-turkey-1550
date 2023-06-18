import "../Pages/payment.css"
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  Input,
  Checkbox,
  Link,
  Button,
} from "@chakra-ui/react";

import styled from "styled-components";
import { color } from "framer-motion";

const PaymentPage = () => {
  const navigate = useNavigate();
 // const [amount, setAmount] = useState(localStorage.getItem('amount'));
    const [name,setname]=useState("")
    const [lastname,setlastname]=useState("")
    const [address,setaddress]=useState("")
    const [tarikh,settarikh]=useState("")
    const [cvv,setcvv]=useState("")
    const [carddetails,setcarddetails]=useState("")
  const handleChange = () => {
    navigate('/');
  }
  const handleorder=()=>{
    const obj={
          name,
          lastname,
          address,
          tarikh,
          cvv,
          carddetails
    }
    if(obj.name && obj.lastname && obj.address && obj.tarikh && obj.cvv && obj.carddetails){
      alert(`Your Order Has placed ${name}`)
      navigate("/games")
    }else{
      alert(`Please Fill All the details`)
    }
   

  }

  useEffect(() => {
    // const updateAmount = () => {
    //   setAmount(localStorage.getItem('amount'));
    // };
    // window.addEventListener('storage', updateAmount);
    // return () => {
    //   window.removeEventListener('storage', updateAmount);
    // };
  }, []);

  return (
    <Box>

      <br />
      <Box id="ten10_off">
        <Link href="">10% off a $50+ Buy Online, Pick Up In Store Order</Link>
      </Box>
      <Flex id="chek_split">
        <Box id="chek_split_1">
          <Box id="shipName">
            <Text fontSize="lg" fontWeight="bold">
              Shipping
            </Text>
            <Flex id="checkinf">
              <Input style={{height:"30px"}} placeholder="First name" type="text" mr={2} value={name} onChange={(e)=>setname(e.target.value)}/>
              <Input style={{height:"30px"}} placeholder="Last name" type="text"  value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
            </Flex>
            <Input style={{height:"30px"}} placeholder="Address" type="text" mt={2} mb={2}  value={address} onChange={(e)=>setaddress(e.target.value)}/>
            <Link fontSize="sm" href="">
              Change Country
            </Link>
            <Checkbox mt={2}>
              <Text fontSize="sm">
                My Billing address is same
              </Text>
            </Checkbox>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Payment
            </Text>
            <Checkbox mt={2}>
              <Text fontSize="md" fontWeight="bold" color="rgb(14, 47, 86)">
                Pay
                <Text
                  as="span"
                  fontSize="md"
                  fontWeight="bold"
                  color="rgb(43, 113, 199)"
                  fontStyle="italic"
                >
                  pal
                </Text>
              </Text>
            </Checkbox>
            <Checkbox mt={2}>
              <Text fontSize="md" fontWeight="bold">
                Credit Card
              </Text>
            </Checkbox>
            <Input style={{height:"30px"}}
              placeholder="Card Number"
              type="text"
              mt={2}
              mb={2}
              value={carddetails} onChange={(e)=>setcarddetails(e.target.value)}
            />
            <Flex>
              <Input style={{height:"30px"}} placeholder="MM/YY" type="text" mr={2}  value={tarikh} onChange={(e)=>settarikh(e.target.value)}/>
              <Input style={{height:"30px"}} placeholder="CVV" type="text"  value={cvv} onChange={(e)=>setcvv(e.target.value)}/>
            </Flex>
          </Box>
        </Box>
        <Box id="chek_split_2" ml={6}>
          <Text fontSize="lg" fontWeight="bold">
            We love what you've picked!
          </Text>
          <Text fontSize="md" mt={2}>
            Arrive in 3 to 8 days
          </Text>
          <Box>
            <Text fontSize="lg" fontWeight="bold" textAlign="center">
              Order
            </Text>
            <Flex justifyContent="space-between" mt={2}>
              <Text>Subtotal</Text>
              <Text id="sub_total">₹{}</Text>
            </Flex>
            <Flex justifyContent="space-between" mt={2}>


              <Text>Shipping</Text>
              <Text id="Shipping_cost">₹0</Text>
            </Flex>
            <Flex justifyContent="space-between" mt={2}>
              <Text fontSize="lg" fontWeight="bold">
                Order Total
              </Text>
              <Text fontSize="lg" fontWeight="bold" id="Order_total">
                ₹ {}
              </Text>
            </Flex>
            <Button onClick={handleorder} style={{height:"50px",backgroundColor:"rgb(255,75,43)",color:"white"}} mt={4} colorScheme="blue" >
              Place order
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentPage;


// const DIV=styled.div`
// #ten10_off a {
//     text-decoration: none;
//     display: block;
//     padding-top: 4px;
//     color: white;
//   }
//   #ten10_off {
//     text-align: center;
//     width: 99%;
//     height: 30px;
//     background-color: rgb(32, 103, 190);
//   }
//   #chek_split {
//     display: flex;
//     width: 80%;
//     margin: auto;
//     font-family: Arial, Helvetica, sans-serif;
//   }
//   #chek_split a {
//     color: black;
//     display: block;
//   }
//   #chek_split input {
//     padding: 5px;
//     border-radius: 4px;
//   }
//   #chek_split button {
//     width: 100%;
//   }
//   #checkinf {
//     display: flex;
//   }
//   #chek_split_1 {
//     width: 100%;
//     padding: 20px;
//   }
//   #chek_split_1 > div {
//     box-shadow: rgba(0, 0, 0, 0) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
//     padding: 5%;
//     margin: 30px 0px;
//   }
  
//   #chek_split_1 input[type="text"] {
//     width: 97%;
//     border: 0.5px solid silver;
//     margin: 10px 5px 0px 0px;
//     box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
//   }
  
//   #chek_split_2 {
//     width: 90%;
//     padding: 5%;
//     height: auto;
//     margin: 20px;
//     box-shadow: rgba(0, 0, 0, 0) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
//   }
//   #chek_split_2 > div {
//     padding: 5%;
//     height: auto;
//     margin: 20px;
//     box-shadow: rgba(0, 0, 0, 0) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
//   }
//   #chek_split_2 > div > div {
//     display: flex;
//     justify-content: space-between;
//   }
//   #chek_split_2 > div > div > button {
//     background-color: rgb(32, 103, 190);
//     height: 40px;
//     border: none;
//     border-radius: 5px;
//     color: white;
//   }
//   #chek_split_2 > div > div > button:hover {
//     background-color: rgb(16, 58, 107);
//   }
  
//   @media (max-width: 800px) {
//     #chek_split {
//       display: block;
//       width: 90%;
//       margin: auto;
//     }
//   }

// `