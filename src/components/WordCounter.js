import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";

export const WordCounter = () => {
  return (
    <Stack gap={3}>
      <Form.Control
        as="textarea"
        placeholder="Add your words here..."
        rows={5}
      />
      <Form.Text muted className="text-center fs-5">
        Word count: 0
      </Form.Text>
    </Stack>
  );
};
