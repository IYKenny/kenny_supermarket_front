import { useLocation } from "react-router";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import {AiFillCar } from "react-icons/ai";
import { FiUsers } from 'react-icons/fi';
import { BiLogOutCircle } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi";

const Sidebar = (
  {
    isMdDesktop = false,
    setIsMdDesktop,
    width = '260px'
  }: {
    isMdDesktop?: boolean,
    setIsMdDesktop: (_: boolean) => void,
    width?: string
  }) => {
  const {pathname} = useLocation();

  const collapse = () => {
    setIsMdDesktop(!isMdDesktop)
  }

  return (
    <VStack 
      w={width} 
      minW={width} 
      minH={`calc(100vh - 70px)`} 
      borderRight={"1px solid #E6EAEF00"} 
      bg="white"
      px={isMdDesktop ? "15px" : "20px"} 
      pt="32px" transitionDuration={'0.3s'}
    >
      <Box w={'100%'} alignSelf="center" color="text.lightest" px="30px" pt="10px" pb="16px" borderRight={'solid 1px #00000000'} height={50}>
        <Flex
          alignItems={'center'}
          justifyContent={isMdDesktop ? 'center' : 'space-between'}
          color={`"text.lightest"}`}
          gap="18px"
          px={isMdDesktop ? "20px" : "30px"}
          py="14px"
          w={'100%'}
          overflow={"hidden"}
        >
          {
            isMdDesktop ?
              <></> :
              <Text
                whiteSpace={'nowrap'}
                overflow={"hidden"}
              >
                Main Menu
              </Text>
          }
          <Text
            onClick={() => {
              collapse()
            }}
            cursor={'pointer'}
            _hover={{color: "text.light"}}
          >
            {
              isMdDesktop ?
                <HiOutlineChevronDoubleRight size={18}></HiOutlineChevronDoubleRight> :
                <HiOutlineChevronDoubleLeft size={18}></HiOutlineChevronDoubleLeft>
            }
          </Text>
        </Flex>
      </Box>

          <SidebarItem
            to={`/products`}
            active={pathname.startsWith("")}
            title="Emplyees"
            icon={<FiUsers size={24} style={{ minWidth: '24px' }} />}
            isMdDesktop={isMdDesktop}
          />

      <Box w="100%" py="24px">
        <Box w="100%" h="1px" bg="neutral.400"/>
      </Box>
      <Box alignSelf="flex-start" color="text.lightest" px="30px" pt="10px" pb="16px">
        {
          isMdDesktop ? <Text></Text> : <Text>SUPPORT</Text>
        }
      </Box>

      <SidebarItem
        to="/signout"
        title="Sign Out"
        icon={<BiLogOutCircle size={24} style={{ minWidth: '24px' }} />}
        isMdDesktop={isMdDesktop}
      />
    </VStack>
  );
};

export default Sidebar;
