import { useState } from "react";
import axiosInstance from "../util/axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

    const toast = useToast();
    const [loading, setLoading] = useState<Boolean>(false);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<any>({});

    const logout = () => {
        localStorage.removeItem("cart")
        window.localStorage.removeItem("access_token");
        navigate("/login");
    }

    const loginAdmin = async (data:any) =>{
        try {
            setLoading(true);
            const res: any = await axiosInstance.post("/auth/login", data);
            setLoading(false);

                toast({
                    title: "Success",
                    description: "LoggedIn successfully!",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                });
                window.localStorage.setItem("access_token", res?.data?.data?.accessToken);
                navigate("/")
            
        }
        catch (error: any) {
            setLoading(false);
            toast({
                title: "Failed",
                description: error?.response?.data?.message || error?.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top-right",
            });
        }
    }

    const registerAdmin = async (data:any) =>{
        try {
            setLoading(true);
            const res: any = await axiosInstance.post("/users/register/as-customer", data);
            setLoading(false);

                toast({
                    title: "Success",
                    description: "Account created successfully!",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                });
                navigate("/login")
            
        }
        catch (error: any) {
            setLoading(false);
            toast({
                title: "Failed",
                description: error?.response?.data?.message || error?.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top-right",
            });
        }
    }

    const getLoggedInUser = async () => {
      try {
          const res:any = await axiosInstance.get(
              `/users/current-user`
        );
        setUserInfo(res?.data?.data);
            
        }
      catch (error: any) {
          
          if (error?.response?.status == 401) {
              logout();
            toast({
                title: "Failed",
                description: "Please login first",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top-right",
            });
              return;
          }
          toast({
            title: "Failed",
            description: error?.response?.data?.message || error?.message,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
        });
        }
  };

    return {
        loading,
        logout,
        loginAdmin,
        getLoggedInUser,
        userInfo,
        registerAdmin
    }
} 

export default useAuth;