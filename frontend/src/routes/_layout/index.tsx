import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import { FiPlus } from "react-icons/fi"
import { createFileRoute } from "@tanstack/react-router"

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {
  const { user: currentUser } = useAuth()

  const handleCreateAgent = () => {
    // TODO: Implement modal opening logic
    console.log("Opening create agent modal")
  }

  return (
    <Container maxW="full">
      <Box pt={12} m={4}>
        <Flex justify="space-between" align="center" mb={6}>
          <Box>
            <Text fontSize="2xl" truncate maxW="sm">
              Hi, {currentUser?.full_name || currentUser?.email} 👋🏼
            </Text>
            <Text>Welcome back, nice to see you again!</Text>
          </Box>
          <Button
            id="create-agent-btn"
            colorScheme="blue"
            size="lg"
            onClick={handleCreateAgent}
            aria-label="Create new AI agent"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            transition="all 0.2s"
          >
            <FiPlus style={{ marginRight: "8px" }} />
            Create Agent
          </Button>
        </Flex>
        
        {/* TODO: Add dashboard content */}
        <Box>
          <Text>Your dashboard content will appear here.</Text>
        </Box>
      </Box>
    </Container>
  )
}
