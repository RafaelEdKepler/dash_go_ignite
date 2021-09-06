import { Box, Button, Checkbox, Flex, Heading, Icon, IconButton, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const { data, isLoading, error, isFetching } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header/>
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar/>
        <Box
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
            </Heading>
            <Link href="/users/create" passHref>
              <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>}>
                Criar novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <Flex
              justify="center"
            >
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex
              justify="center"
            >
              <Text>Falha ao carregar lista de usuários </Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink"/>
                  </Th>
                  <Th>Usuário</Th>
                  { isWideVersion && <Th>Data de cadastro</Th>}
                  <Th width="8"/>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(user => (
                  <Tr key={user.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink"/>
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold">{user.name}</Text>
                        <Text fontWeight="sm" color="gray.300">{user.email}</Text>
                      </Box>
                    </Td>
                    {isWideVersion && (
                      <Td>
                        {user.createdAt}
                      </Td>
                    )}
                    <Td>
                      {isWideVersion ? (
                        <Button as="a" size="sm" fontSize="16" colorScheme="purple" leftIcon={<Icon as={RiPencilLine}/>}>
                          Editar
                        </Button>
                      ) : (
                        <IconButton aria-label="Edit user" as="a" size="sm" fontSize="16" colorScheme="purple" icon={<Icon as={RiPencilLine}/>}/>
                      )}

                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Pagination
              totalCountOfRegister={200}
              registerPerPage={10}
              currentPage={5}
              onPageChange={() => {}}
            />
          </>
          )}
        </Box>
      </Flex>
    </Box>
  )
}