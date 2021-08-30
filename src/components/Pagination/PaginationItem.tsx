import { Button } from "@chakra-ui/react"

interface PaginationItemProps {
  isCurrent ?: boolean;
  children : string;
}

export function PaginationItem({isCurrent, children} : PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}
      >
        {children}
      </Button>
    )
  } else {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        bgColor="gray.700"
        _hover={{
          bg: "gray.500"
        }}
      >
        {children}
      </Button>
    )
  }
}