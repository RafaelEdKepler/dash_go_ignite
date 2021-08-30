import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData} : ProfileProps) {
  return (
    <Flex align="center">
    {showProfileData && (
      <Box mr="4" textAlign="right">
        <Text>Rafael Kepler</Text>
        <Text color="gray.300" fontSize="small">rafael.kepler@hotmail.com</Text>
      </Box>
    )}
    <Avatar size="md" name="Rafael Kepler" src="https://github.com/RafaelEdKepler.png" />
  </Flex>
  );
}