import { ReactNode, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Flex, useBreakpointValue, Text } from "@chakra-ui/react";

interface SidebarItemProp {
  to: string;
  icon?: ReactNode;
  title: string;
  active?: boolean;
  isMdDesktop?: boolean;
};

const SidebarItem = ({ to, icon, title, active, isMdDesktop }: SidebarItemProp) => {
  return (
    <Link to={to} style={{ width: "100%", margin: 0,marginBottom: "4px" }}>
      <Flex
        alignItems="center"
        bg={`${active ? "primary.500" : ""}`}
        color={`${active ? "white" : "text.light"}`}
        _hover={{
          color: "white",
          bg: "primary.500",
        }}
        fontWeight="bold"
        fontSize="15px"
        borderRadius="16px"
        gap="18px"
        px={isMdDesktop? "20px": "20px"}
        py="14px"
        overflow={"hidden"}
      >
        {icon}
        {
          isMdDesktop ?
            <></>
              :
            <>{title}</>
        }
      </Flex>
    </Link>
  );
};

export default SidebarItem;
