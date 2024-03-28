import React, { useState } from "react";
import { Box, VStack, HStack, Text, Input, Button, Avatar, Divider, Heading } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: "Me",
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");
    }
  };

  return (
    <Box bg="gray.100" minH="100vh">
      <Box maxW="600px" mx="auto" py={8}>
        <Heading textAlign="center" mb={8}>
          Chatroom App
        </Heading>
        <Box bg="white" borderRadius="md" p={4} boxShadow="md">
          <Box overflowY="auto" maxH="400px" mb={4}>
            <VStack spacing={4} align="stretch">
              {messages.map((message) => (
                <Box key={message.id}>
                  <HStack>
                    <Avatar size="sm" name={message.sender} src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhdmF0YXIlMjAlMjQlN0JtZXNzYWdlLnNlbmRlciU3RHxlbnwwfHx8fDE3MTE2MTc2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080`} />
                    <Text fontWeight="bold">{message.sender}</Text>
                  </HStack>
                  <Text ml={10}>{message.text}</Text>
                  <Divider my={2} />
                </Box>
              ))}
            </VStack>
          </Box>
          <HStack>
            <Input placeholder="Type a message..." value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
            <Button colorScheme="blue" leftIcon={<FaPaperPlane />} onClick={handleSendMessage}>
              Send
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;