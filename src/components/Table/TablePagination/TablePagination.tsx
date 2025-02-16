import { Box, Icon } from "@chakra-ui/react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import ReactPaginate from "react-paginate";
import styles from "./TablePagination.module.css";

interface TablePaginationProps {
  handlePageChange: (selectedItem: { selected: number }) => void;
  pageCount: number;
}

export const TablePagination = ({
  handlePageChange,
  pageCount,
}: TablePaginationProps) => {
  return (
    <Box
      as="nav"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"5rem"}
    >
      <ReactPaginate
        className={styles.pagination}
        pageCount={pageCount}
        pageRangeDisplayed={1}
        marginPagesDisplayed={3}
        onPageChange={handlePageChange}
        previousLabel={
          <Icon boxSize={4}>
            <SlArrowLeft />
          </Icon>
        }
        nextLabel={
          <Icon boxSize={4}>
            <SlArrowRight />
          </Icon>
        }
        breakLabel="..."
        previousClassName={styles.paginationPrevious}
        nextClassName={styles.paginationNext}
        //pageClassName='pagination'
        activeLinkClassName={styles.paginationActive}
        pageLinkClassName={styles.paginationLink}
        // disabledClassName='disabled'
        //containerClassName={styles.paginationContainer}
        //  pageLinkClassName={styles.pagination__link}
        previousLinkClassName={styles.paginationPreviousLink}
        nextLinkClassName={styles.paginationNextLink}
        // breakLinkClassName='pagination__link'
        // disabledLinkClassName='pagination__link--disabled'
      />
    </Box>
  );
};
