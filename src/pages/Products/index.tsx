import { useEffect, useState } from "react";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
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

const Products = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const {
    getAllLoading,
    getAllCarOwners,
    owners,
    getTotalCarOwners,
    totalOwners,
  } = useCarOwners();
  const itemsPerPage = 5;
  const location = useLocation();
  const [pageNum, setPageNum] = useState<number>(1);
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  useEffect(() => {
    const page: any = searchParams.get("page");
    if (parseInt(page) > 0) {
      return setPageNum(page);
    }
    return navigate("/?page=1");
  }, [searchParams]);

  const headers: any = [
    {
      name: "First Name",
    },
    {
      name: "Last Name",
    },
    {
      name: "National ID",
      sortable: true,
    },
    {
      name: "Phone number",
    },
    {
      name: "Email",
    },
    {
      name: "Department",
    },
    {
      name: "Position",
    },
    {
      name: "Manufacturer",
    },
    {
      name: "Model",
    },
    {
      name: "Serial Number",
    },
    // {
    //   name: "Manage",
    // },
  ];

  const getOwnersByPageNum = (pageNum: any) => {
    getAllCarOwners(itemsPerPage, pageNum);
  };

  useEffect(() => {
    getOwnersByPageNum(pageNum);
  }, [pageNum]);

  //get total car owners to set pagination total
  useEffect(() => {
    getTotalOwners();
  }, []);

  const getTotalOwners = async () => {
    getTotalCarOwners(0, 0);
  };

  return (
    <>
      <Box pl="25px" pr="25px" mx="auto" w="max-content" pt={"30px"}>
        <Box className="table-nav">
          <Box className="tb-title">
            <Text>Products</Text>
          </Box>
        </Box>
        <Box className="customers-table-container w-full" marginBottom={"40px"}>
          {
            !getAllLoading && owners?.length == 0 ?
              <Box w={'100%'} py={'30px'} >
                <Center w={'100%'}><Text fontSize={'20px'} fontWeight={'bold'}>No products available</Text></Center>
              </Box>
              :
              <></>
          }
          <Grid flexWrap={'wrap'} columnGap={'20px'}>
            {
              owners?.map((owner: any) => {
                return (
                  <Product owner={owner} />
                )
              })
            }
          </Grid>
        </Box>
      </Box>
    </>
  );
};

const Product = ({ owner }: any) => {
  const [count, setCount] = useState<number>(0);
  const toast = useToast()

  const addToCart = (productInfo: any) => {
    try {
      const currentCart = localStorage.getItem("cart");
      let newCart: any = [];
      if (currentCart) {
        const cartArrObj = JSON.parse(currentCart);
        if (cartArrObj?.length > 0) {
          newCart = cartArrObj?.filter((p: any) => p?.code != productInfo?.code)
        }
      }
      newCart.push({ ...productInfo, quantity: count })
      toast({
        title: "Success",
        description: "Product added to cart successfully!",
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
    <Card maxW='sm' shadow={"none"}>
      <CardBody>
        <Stack mt='6' spacing='3'>
          <Flex alignItems={"center"}>
            <Heading size='md'>{owner?.name}</Heading>
            <Text color='green.600' mx={2} fontSize='xl'>
              {owner?.price?.toLocaleString()}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Flex columnGap={'6px'}>
            <Center>
              <Input type="number" value={count} onChange={(e) => { setCount(e.currentTarget.value as unknown as number) }}></Input>
            </Center>
          </Flex>
          {count > 0 && count < 100 ?
            <Button onClick={(e) => {
              addToCart(owner)
            }} variant='ghost' colorScheme='whatsapp'>
              Add to cart
            </Button>
            :
            <Button variant='ghost' colorScheme='whatsapp' cursor={"not-allowed"}>
              Add to cart
            </Button>
          }
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default Products;
