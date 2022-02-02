//@ts-nocheck
import Chance from "chance";
import { render, JSX, Box, Text } from "solid-ink";

const chance = new Chance();

const users = new Array(10).fill(true).map((_, index) => ({
  id: index,
  name: chance.name(),
  email: chance.email()
}));

const Table = () => (
  <Box flexDirection="column" width={80}>
    <Box>
      <Box width="10%">
        <Text>ID</Text>
      </Box>

      <Box width="50%">
        <Text>Name</Text>
      </Box>

      <Box width="40%">
        <Text>Email</Text>
      </Box>
    </Box>
    <Text color="green">I am green</Text>
    <Text color="black" backgroundColor="white">
      I am black on white
    </Text>
    <Text color="#ffffff">I am white</Text>
    <Text bold>I am bold</Text>
    <Text italic>I am italic</Text>
    <Text underline>I am underline</Text>
    <Text strikethrough>I am strikethrough</Text>
    <Text inverse>I am inversed</Text>
    <Text color="green">Green</Text>
    <Text color="#005cc5">Blue</Text>
    <Text color="rgb(232, 131, 136)">Red</Text>

    {users.map(user => (
      <Box key={user.id}>
        <Box width="10%">
          <Text>{user.id}</Text>
        </Box>

        <Box width="50%">
          <Text>{user.name}</Text>
        </Box>

        <Box width="40%">
          <Text>{user.email}</Text>
        </Box>
      </Box>
    ))}
  </Box>
);

render(() => <Table />);
