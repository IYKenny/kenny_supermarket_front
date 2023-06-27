import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface UnAuthLayoutProps {
    children?: ReactNode;
}

const UnAuthLayout = ({ children }: UnAuthLayoutProps) => {

  if (localStorage.getItem("access_token")) {
    return <Navigate to="/" />;
  }

    return (
        <Box
        bg="gray.50"
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w={"100%"}
      >
        {children}
      </Box>
    );
}

export default UnAuthLayout;