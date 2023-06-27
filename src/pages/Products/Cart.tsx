import { useEffect, useState } from "react";
import {CiCircleQuestion, CiSearch } from "react-icons/ci";
import { FiDelete } from "react-icons/fi";
import {
  Flex,
  Text,
  Input,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  useToast,
  Spinner,
  Box,
  Center,
  Heading,
  Button,
  Stack,
  Divider,
  ButtonGroup,
  Image,
  Grid
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import "../../dashboard.css";
import { AiFillCalendar, AiFillPlusCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import useCarOwners from "../../apis/useProducts";
import { FiMinus, FiPlus } from "react-icons/fi";
import axiosInstance from "../../util/axios";

const Cart = () => {

  const [carts, setCarts] = useState<any>([])
  const toast = useToast();
  const navigate = useNavigate()
  const getCarts = () => {
    try {
      const currentCart: any = localStorage.getItem("cart");
      if (currentCart) {
        setCarts(JSON.parse(currentCart));
      }
    }
    catch (error) { alert("an error ocuured") }
  }

  useEffect(() => {
    getCarts()
  }, [])

  const checkout = async () => {
    try {
      if (carts.length > 0) {
        for (let i = 0; i < carts.length; i++) {
          const data = {
            quantity: carts[i]?.quantity,
            code: parseInt(carts[i]?.code)
          };
          console.log("data", data)
          const res: any = await axiosInstance.post("/product-purchased", data);
        }
        toast({
          title: "Success",
          description: "Products purchased successfully!",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top-right",
        });
        localStorage.removeItem("cart")
        navigate("/")
      }
    }
    catch (error) {
      console.log(error)
      toast({
        title: "Failed",
        description: "error occurred , please try again",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  }

  const getTotal = () => {
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += parseFloat(carts[i]?.price) * parseFloat(carts[i]?.quantity);
    }
    return sum;
  }

  const removeCart = (productInfo: any) => {
    try {
      const currentCart = localStorage.getItem("cart");
      let newCart: any = [];
      if (currentCart) {
        const cartArrObj: any = JSON.parse(currentCart);
        if (cartArrObj?.length > 0) {
          newCart = cartArrObj?.filter((p: any) => p?.code != productInfo?.code)
        }
      }
      setCarts(newCart)
      toast({
        title: "Success",
        description: "Product removed from cart successfully!",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
    catch (error) {
      alert("An error ocurred, please try again")
    }
  }

  return (
    <>
      <Box pl="25px" pr="25px" mx="0px" pt={"30px"}>
        <Box className="table-nav">
          <Box className="tb-title">
            <Text>Cart</Text>
          </Box>
        </Box>

        <Box py={'20px'} px={'20px'} className="customers-table-container w-full" marginBottom={"40px"}>
          {
            carts?.length == 0 ?
              <Box w={'100%'} py={'30px'} >
                <Center w={'100%'}><Text fontSize={'20px'} fontWeight={'bold'}>No products added to cart available</Text></Center>
              </Box>
              :
              <></>
          }
          <Grid mb={'10px'} flexWrap={'wrap'} columnGap={'20px'}>
            {
              carts?.map((cart: any) => {
                return (
                  <Product onRemove={(productInfo: any) => {
                    removeCart(productInfo)
                  }} owner={cart} />
                )
              })
            }

          </Grid>
          {
            carts?.length > 0 ?
              <Box py={'10px'}>
                <Text mb={'10px'} color='green.600' fontSize='md'>
                  Total: {getTotal()?.toLocaleString()}
                </Text>
                <Button colorScheme="whatsapp" onClick={() => {
                  checkout()
                }}>Buy Now</Button>
              </Box>
              :
              <></>
          }
        </Box>
      </Box>
    </>
  );
};

const Product = ({ owner, onRemove }: any) => {
  return (
    <Card maxW='sm' shadow={"none"}>
      <CardBody>
        <Flex alignItems={"center"}>
          <Heading size='md'>{owner?.name}</Heading>
          <Text color='green.600' fontSize='xl' mx="2">
            {(parseFloat(owner?.quantity) * (owner?.price))?.toLocaleString()}
          </Text>
          <Button fontSize={"md"} float={"right"} onClick={() => {
            onRemove(owner)
          }} colorScheme="red" variant={"ghost"}><FiDelete/></Button>
          </Flex>
      </CardBody>        
    </Card>
  )
}

export default Cart;
