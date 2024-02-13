import { Container } from "./styles";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
export function Card({ title, description, icon: Icon, tags }) {
  return (
    <Container>
      <h1>{title}</h1>
      <ul className="stars">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStarHalf />
      </ul>
      <p>{description}</p>
      <ul>
        {tags.map((tag) => {
          return <li> {tag}</li>;
        })}
      </ul>
    </Container>
  );
}
