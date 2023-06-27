import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Img,
  Center,
  useBreakpointValue 
} from "@chakra-ui/react";
import DEFAULT_AVATAR from "../assets/images/user.png";
import { FiChevronDown } from 'react-icons/fi';
import useAuth from "../apis/useAuth";
import { useEffect } from "react";

const Header = ({ isMobile, isSmMobile, isMdDesktop }: { isMobile: boolean | undefined, isSmMobile: boolean | undefined, isMdDesktop: boolean | undefined }) => {
  const { logout, userInfo, getLoggedInUser }: any = useAuth();
  
  useEffect(() => {
    getLoggedInUser();
  }, []);
  
  return (
        <>
      <Box
     w={`100%`}
     h="70px"
     bg="neutral.300"
     borderBottom="1px"
     borderBottomColor="neutral.400"
     px="25px"
     py="0px"
     position="fixed"
     top="0px"
     zIndex="999"
      >
        <Box w={"100%"} h={"100%"} display={"flex"} justifyContent={"flex-end"}>


          <Center pr={'40px'} gridGap={'40px'}>
        <Link to={'/'}>Products</Link>
        <Link to={'/cart'}>Cart</Link>

           {
            userInfo?.role == "ADMIN"?
<Link to={'/report'}>Report</Link>
            :
            <></>
           }
          </Center>
          <Center>
          <Text>{userInfo?.firstName}</Text>
          </Center>
        </Box>
      </Box>
    </>
    )
}

export default Header;