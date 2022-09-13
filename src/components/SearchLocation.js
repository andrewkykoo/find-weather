import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

function SearchLocation({ handleInput, handleSubmit }) {
  return (
    <>
      <FormControl>
        <FormLabel>City</FormLabel>
        <Input type="text" onChange={(e) => handleInput(e)} />
        <FormHelperText>E.g., New York, Berlin, Paris</FormHelperText>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>
      </FormControl>
    </>
  );
}

export default SearchLocation;
