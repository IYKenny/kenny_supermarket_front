import {
    Box,
    Center,
    Button,
    FormControl,
    FormLabel,
    Input,
    Text,
    Image,
    Heading,
  } from "@chakra-ui/react";
  import "./auth.css";
  import { Link, useNavigate } from "react-router-dom";
  import logo from "../../assets/images/logo.png";
  import { FiLogIn } from "react-icons/fi";
  import useAuth from "../../apis/useAuth";
  import { useState } from "react";
  
  const Signup = () => {
    const { registerAdmin, loading } = useAuth();
  
    const [data, setData] = useState<any>({
      email: undefined,
      password: undefined,
      firstname: undefined,
      phone: undefined
    });
  
    const login = (e: React.FormEvent) => {
      e.preventDefault();
      registerAdmin(data);
    };
  
    return (
      <Box py={"100px"} w={"100%"} background={"gray.200"}>
        <Center py={"20px"} w={"100%"}>
          <Center
            boxShadow="base"
            bg={"white"}
            className="auth-forms"
            w={"33%"}
            px={"35px"}
            py={"40px"}
            pt={"30px"}
            rounded={"md"}
          >
            <Box w={"100%"} onSubmit={login} as={"form"}>
            <Heading textAlign={"center"} mb={"4px"} fontSize={"xl"}>Customer Signup</Heading> 

              <FormControl isRequired mb={"10px"}>
                <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                  Email address
                </FormLabel>
                <Input
                  onChange={(e: any) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  type={"email"}
                  placeholder="Email address"
                />
              </FormControl>

  <FormControl isRequired mb={"10px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                 First name
                </FormLabel>
                <Input
                  onChange={(e: any) => {
                    setData({ ...data, firstname: e.target.value });
                  }}
                  type={"text"}
                  placeholder="First name"
                />
              </FormControl>

              <FormControl isRequired mb={"10px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                 Phone
                </FormLabel>
                <Input
                  onChange={(e: any) => {
                    setData({ ...data, phone: e.target.value });
                  }}
                  type={"number"}
                  placeholder="Phone"
                />
              </FormControl>
  
              <FormControl isRequired mb={"30px"}>
                <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                  Password
                </FormLabel>
                <Input
                  onChange={(e: any) => {
                    setData({ ...data, password: e.target.value });
                  }}
                  type={"password"}
                  placeholder="Password"
                />
              </FormControl>
  
              <Box>
                <Button
                  type={"submit"}
                  fontWeight={"bold"}
                  fontSize={"16px"}
                  colorScheme="whatsapp"
                  w={"100%"}
                  mb={"20px"}
                  display={"flex"}
                  columnGap={"5px"}
                >
                  Signup
                </Button>
              </Box>
              <Center columnGap={'10px'}>
              <Text>Already have an account? </Text>
              <Link to={'/login'} style={{color: "green"}}>Login</Link>
            </Center>
            </Box>
          </Center>
        </Center>
      </Box>
    );
  };
  
  export default Signup;
  