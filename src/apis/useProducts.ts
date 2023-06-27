import { useState } from "react";
import axiosInstance from "../util/axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useProducts = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [owners, setOwners] = useState<any>([

  ]);
  const [totalOwners, setTotalOwners] = useState<number>(30);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [getAllLoading, setGetAllLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [report,setReport] = useState<any>([])

  const registerCarOwner = async (data: any) => {
    try {
      setRegisterLoading(true);
      await axiosInstance.post("/carOwners/", data);
      setRegisterLoading(false);

      toast({
        title: "Success",
        description: "Car owner registered successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });

      return "success"; 
    } catch (error:any) {
      setRegisterLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error || "Failed to register",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const updateCarOwner = async (carOwnerId: string, data: any) => {
    try {
      setUpdateLoading(true);
      await axiosInstance.put(`/carOwners/${carOwnerId}`, data);
      setUpdateLoading(false);

      toast({
        title: "Success",
        description: "Car owner updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error:any) {
      setUpdateLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error ||  "Failed to update",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const deleteCarOwner = async (carOwnerId: string) => {
    try {
      setDeleteLoading(true);
      await axiosInstance.delete(`/carOwners/${carOwnerId}`);
      setDeleteLoading(false);

      toast({
        title: "Success",
        description: "Car owner deleted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error:any) {
      setDeleteLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error ||  "Failed to delete",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const getAllCarOwners = async (limit: number, skip: number) => {
    try {
      setGetAllLoading(true);
      const res: any = await axiosInstance.get(`/products/all`);
      console.log(res.data.data)
      setOwners(res.data?.data);
      setGetAllLoading(false);
    } catch (error:any) {
      setGetAllLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error || "Failed to retrieve",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const getReport = async () => {
    try {
      setGetAllLoading(true);
      const res: any = await axiosInstance.get(`/product-purchased/all`);
      console.log(res.data.data)
      setReport(res.data?.data);
      setGetAllLoading(false);
    } catch (error:any) {
      setGetAllLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error || "Failed to retrieve products",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const getTotalCarOwners = async (limit: number, skip: number) => {
    
  };

  const searchCarOwners = async (ownerName: string) => {
    try {
      setSearchLoading(true);
      await axiosInstance.get(`/carOwners/search?ownerName=${ownerName}`);
      setSearchLoading(false);
    } catch (error) {
      setSearchLoading(false);
      toast({
        title: "Failed",
        description: "Failed to search",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return {
    registerCarOwner,
    updateCarOwner,
    deleteCarOwner,
    getAllCarOwners,
    searchCarOwners,
    registerLoading,
    updateLoading,
    deleteLoading,
    getAllLoading,
    searchLoading,
    owners,
    totalOwners,
    getReport,
    report,
    getTotalCarOwners
  };
};

export default useProducts;