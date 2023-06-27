import React, { useEffect, useState } from "react";
import {
  Flex,
  Text,
  Box
} from "@chakra-ui/react";
import Pagination from "react-js-pagination";
import "./pagination.css"

const TablePagination = ({
  length,
  itemsPerPage,
  setPage,
  initialPage,
  pageNum,
  currentItems,
}:any) => {
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    setPageCount(Math.ceil(length / itemsPerPage));
  }, [length, itemsPerPage]);

  const handlePageClick = (page:number) => {
    setPage(page);
  }
   
  return (
    <Box className="justify-between mt-5 pagContainer">
      <Flex className="pg-tab">
        {pageCount == 0 ? (
          <></>
        ) : (
          <>
            <Flex gridGap={1} className="text-sm text-gray-700 showing-page">
              Showing <Text className="font-medium">{((pageNum-1)*10)+1}</Text> to{" "}
              <Text className="font-medium">{(pageNum * itemsPerPage) - (itemsPerPage - currentItems)}</Text> of{" "}
              <Text className="font-medium">{length}</Text> results
            </Flex>
            &nbsp;&nbsp;&nbsp;
          </>
        )}
        <Box className="pag-buttons">
        <Pagination
          activePage={initialPage}
            itemsCountPerPage={itemsPerPage}
            itemClass={'pagButton  pagButton-border bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center border text-sm font-medium'}
            totalItemsCount={length}
            activeClass={'pagButton pagButton-border pagButton-border-active z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center border text-sm font-medium'}
            pageRangeDisplayed={8}
            itemClassFirst={"pagButton pagButton-border prevBtn relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"}
            itemClassLast={"pagButton-border pagButton relative inline-flex nextBtn items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"}
            onChange={(pageNumber: any) => {
              handlePageClick(pageNumber)
          }}
        />
        </Box>
      </Flex>
    </Box>
  );
};

export default TablePagination;