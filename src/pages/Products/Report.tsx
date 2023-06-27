import { useEffect, useState } from "react";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import {
  Flex,
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
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import "../../dashboard.css";
import { AiFillCalendar, AiFillPlusCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import useCarOwners from "../../apis/useProducts";

const Report = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const {
    getAllLoading,
    getAllCarOwners,
    owners,
    report,
    getReport,
    getTotalCarOwners,
    totalOwners,
  } = useCarOwners();
  const itemsPerPage = 5;
  const location = useLocation();
  const [pageNum, setPageNum] = useState<number>(1);
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

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

  useEffect(() => {
    getReport();
  }, []);

  const getTotalOwners = async () => {
    getTotalCarOwners(0, 0);
  };

  return (
    <>
      <Box pl="25px" pr="25px" mx="0px" pt={"30px"}>
        <Box className="table-nav">
          <Box className="tb-title">
            <Text>Report</Text>
          </Box>
        </Box>

        <Box className="customers-table-container w-full" marginBottom={"40px"}>
          {
            !getAllLoading && report?.length==0?
<Box w={'100%'} py={'30px'} >
  <Center w={'100%'}><Text fontSize={'20px'} fontWeight={'bold'}>No report available</Text></Center>
</Box>
            :
            <></>
          }
           <Table className="customers-table">
        <Thead className="bg-gray-50">
          <Tr>
          <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              NO
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Customer Name
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Date
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Product Code
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Product Name
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Quantity
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Unit Price
            </Th>
            <Th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Total
            </Th>
          </Tr>
        </Thead>
        <Tbody className="bg-white divide-y divide-gray-200">
          {report.map((item:any,index:number) => (
            <Tr key={item.id}>
                     <Td className="px-6 py-4 whitespace-nowrap">
                {index+1}
              </Td>
              <Td className="px-6 py-4 whitespace-nowrap">
                {item.customer.firstName}
              </Td>
              <Td className="px-6 py-4 whitespace-nowrap">{new Date(item.createdAt).toLocaleDateString()}</Td>
              <Td className="px-6 py-4 whitespace-nowrap">
                {item.productQuantity.product.code}
              </Td>
              <Td className="px-6 py-4 whitespace-nowrap">
                {item.productQuantity.product.name}
              </Td>
              <Td className="px-6 py-4 whitespace-nowrap">
                {item.productQuantity.quantity}
              </Td>
              <Td className="px-6 py-4 whitespace-nowrap">
                {item.productQuantity.product.price}
              </Td>
              <Td className="px-6 py-4 whitespace-nowrap">{item.total}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
        </Box>
      </Box>
    </>
  );
};

export default Report;
