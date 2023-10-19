import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { Banner } from "./components/Banner";
import { WordCounter } from "./components/WordCounter";

export const App = () => {
  return (
    <Container className="my-5">
      <Stack gap={4}>
        <Banner />
        <WordCounter />
      </Stack>
    </Container>
  );
};
