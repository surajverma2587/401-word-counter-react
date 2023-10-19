import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const getNumberOfWords = (words) => {
  // convert string to array
  const stringArray = words.split(" ");

  // remove all spaces
  const filteredArray = stringArray.filter((word) => {
    return word;
  });

  // return array length
  return filteredArray.length;
};

export const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleChange = ({ target }) => {
    // get the value from the textarea
    const words = target.value;

    // get the word count of the value
    const numberOfWords = getNumberOfWords(words);

    // set word count value in state
    setWordCount(numberOfWords);
  };

  return (
    <Stack gap={3}>
      <Form.Control
        as="textarea"
        placeholder="Add your words here..."
        rows={5}
        onChange={handleChange}
      />
      <Form.Text muted className="text-center fs-5">
        Word count: {wordCount}
      </Form.Text>
    </Stack>
  );
};
