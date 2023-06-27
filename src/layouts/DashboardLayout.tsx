import Sidebar from "../components/Sidebar";
import { ReactNode, useEffect, useState, useMemo } from "react";
import { Box, Flex, Center, Img, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LogoIcon from "../assets/images/logoicon.png";
import Logo from "../components/Logo";
import { Navigate } from "react-router-dom";

interface DashboardLayoutProps {
    children?: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [width, setWidth] = useState<any>('260px');
    const [isMdDesktop, setIsMdDesktop] = useState<any>(false);
  
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isSmMobile = useBreakpointValue({ base: true, sm: false });
    const isDesktop = useBreakpointValue({ base: true, lg: false });

    useEffect(() => {
        setIsMdDesktop(isDesktop)
        setWidth(isDesktop ? '93px' : '260px');
      }, [isDesktop])
    
      useEffect(() => {
        setWidth(isMdDesktop ? '93px' : '260px');
      }, [isMdDesktop])
  
      if (!localStorage.getItem("access_token")) {
        return <Navigate to="/login" />;
      }

    return (
        <Flex width={"100%"} position={"relative"}>
      <Box
        w={`100%`}
        float={"right"}
        position={"absolute"}
        right={"0px"}
        h={"100vh"}
        overflowY={"auto"}
        backgroundColor={"#F2F4F6"}
        pt={"0px"}
        pl={"0px"}
        transitionDuration={"0.3s"}
      >
        <Header isMobile={isMobile} isSmMobile={isSmMobile} isMdDesktop={isMdDesktop} />
        <Box h={"70px"}></Box>
        <Box>
          {children}
        </Box>
      </Box>
    </Flex>
    );
}

export default DashboardLayout;