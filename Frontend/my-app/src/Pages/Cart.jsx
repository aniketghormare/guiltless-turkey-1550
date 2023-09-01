import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Select,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  CART_SUCC,
  TOTAL_SUCC,
} from '../Redux/ProductReducer/actionTypes';

const Cart = () => {
  const [cartrem, setCartRemove] = useState(false);
  const token = JSON.parse(localStorage.getItem('token'));
  const dispatch = useDispatch();
  const [val, setVal] = useState(1);
  const navigate = useNavigate();
  let [count, setCount] = useState(0);

  const total = useSelector((store) => store.ProductReducer.total);
  const cartdata = useSelector((store) => store.ProductReducer.CART);

  const getcart = () => {
    fetch('https://gamezy-borsejugal23.onrender.com/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.msg.length);
        dispatch({ type: CART_SUCC, payload: data.msg });
      })
      .catch((err) => {
        // Handle error
      });
  };

  const handleChange = (val) => {
    setVal(+val);
  };

  const carttotal = () => {
    let total = 0;
    for (let i = 0; i < cartdata.length; i++) {
      if (cartdata[i].price) {
        total += Number(cartdata[i].price * val);
      } else {
        total += 25;
      }
    }
    localStorage.setItem('total', JSON.stringify(total));
    dispatch({ type: TOTAL_SUCC, payload: total });
  };

  const cartRemove = (el) => {
    const { _id } = el;
    fetch(`https://gamezy-borsejugal23.onrender.com/cart/remove/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCartRemove(!cartrem);
        getcart();
      })
      .catch((err) => {
        // Handle error
      });
  };

  useEffect(() => {
    getcart();
  }, [val, total, cartrem, count]);

  useEffect(() => {
    carttotal();
  }, [val]);

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <Container maxW="xl" mt={4}>
      <Heading as="h3" size="lg" mb={4}>
        Shopping Cart
      </Heading>
      <Stack spacing={4}>
        <Box
          p={4}
          borderRadius="lg"
          borderWidth="1px"
          borderColor="gray.200"
          boxShadow="md"
        >
          <Flex justifyContent="space-between">
            <Text>Subtotal: ${total}</Text>
            <Button
              onClick={handlePayment}
              colorScheme="teal"
              size="sm"
              cursor="pointer"
            >
              CHECKOUT
            </Button>
          </Flex>
          <Text mt={2}>Shipping, Tax & Coupons are applied on the next page.</Text>
          <Flex alignItems="center" mt={2}>
            <Text fontSize="lg">IN CART {count} ITEM</Text>
          </Flex>
        </Box>
        <Stack spacing={4}>
          {cartdata.map((el, index) => (
            <Box
              key={index}
              p={4}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="red.200"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"  
              margin={"10px"}
              padding={"10px"}          >
              <Flex>
                <Image
                  src={el.avatar ? el.avatar : el.Poster}
                  alt=""
                  boxSize="200px"
                />
                <Spacer />
                <Box flex="1">
                  {el.category ? <Heading as="h4">{el.category}</Heading> : <Heading as="h4">{el.Title}</Heading>}
                  <Text>Price :${el.price || 25}</Text>
                  <Text>Estimated delivery 2 days</Text>
                  <Select
                    name="quantity"
                    value={val}
                    onChange={(e) => handleChange(e.target.value)}
                  >
                    {[1, 2, 3, 4, 5].map((quantity) => (
                      <option key={quantity} value={quantity}>
                        {quantity}
                      </option>
                    ))}
                  </Select>
                  <Button
                    onClick={() => cartRemove(el)}
                    // colorScheme={"red"}
                    // variant="outline"
                    mt={2}
                    size="sm"
                    cursor="pointer"
                    color={"white"}
                    backgroundColor={"tomato"}
                    border={"none"}
                    fontWeight={"bold"}
                  >
                    Remove
                  </Button>
                </Box>
              </Flex>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Cart;
