import { Box, Button, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack
        direction="row"
        spacing="2"
      >
        <PaginationItem isCurrent={true}>1</PaginationItem>
        <PaginationItem >2</PaginationItem>
        <PaginationItem >3</PaginationItem>
        <PaginationItem >4</PaginationItem>
        <PaginationItem >5</PaginationItem>
      </Stack>
    </Stack>
  )
}