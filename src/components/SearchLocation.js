import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  HStack,
  Input,
} from "@chakra-ui/react";

function SearchLocation({ handleInput, handleSubmit }) {
  return (
    <Box m={5}>
      <FormControl>
        <HStack>
          <Input
            htmlSize={20}
            width="auto"
            type="text"
            placeholder="New York"
            onChange={(e) => handleInput(e)}
          />
          <Button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </HStack>
        <FormHelperText>E.g., New York, Berlin, Paris</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default SearchLocation;
