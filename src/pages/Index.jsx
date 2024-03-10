import { Box, Flex, VStack, Input, Button, Text, IconButton, Divider, useToast } from "@chakra-ui/react";
import { FaTwitter, FaFeatherAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTweetSend = () => {
    // Normally you would handle tweet submission here
    toast({
      title: "Tweet sent.",
      description: "Your tweet has been posted!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4}>
      <Flex as="nav" bg="twitter.500" color="white" justifyContent="space-between" p={4} w="full" alignItems="center">
        <FaTwitter size="2em" />
        <Text fontSize="xl" fontWeight="bold">
          MiniTwitter
        </Text>
        <Box w="2em" /> {/* Spacer */}
      </Flex>

      <Box w="full" maxW="md" p={4}>
        <Flex alignItems="center">
          <Input placeholder="What's happening?" />
          <IconButton colorScheme="twitter" aria-label="Send tweet" icon={<FaFeatherAlt />} onClick={handleTweetSend} ml={2} />
        </Flex>

        <Divider my={4} />

        {/* This is where you'd map over tweets and display them */}
        <VStack spacing={3} align="stretch">
          <Tweet text="This is the first tweet!" />
          <Tweet text="Here's another tweet, just for fun." />
          {/* Add more <Tweet /> components as needed */}
        </VStack>
      </Box>
    </VStack>
  );
};

// Tweet component for rendering individual tweets
const Tweet = ({ text }) => (
  <Box bg="gray.100" p={4} borderRadius="md" borderWidth="1px">
    <Text>{text}</Text>
  </Box>
);

export default Index;
