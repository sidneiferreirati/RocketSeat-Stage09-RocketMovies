import { Container } from "./styles";

export function Tag({ tags }) {
  return (
    <Container>
      {tags.map((tag) => {
        return <li>{tag}</li>;
      })}
    </Container>
  );
}
