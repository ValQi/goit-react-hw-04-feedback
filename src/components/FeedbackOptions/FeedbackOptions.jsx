import { Button, Container } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <Container>
      {options.map((option, index) => (
        <Button
          className
          key={index}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Container>
  );