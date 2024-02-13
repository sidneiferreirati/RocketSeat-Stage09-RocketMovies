import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <input type="text" placeholder="Pesquisar pelo título" />

      <Link to="/perfil">
        <div className="avatar">
          <div>
            <h2>Sidnei Alves</h2>
            <span>sair</span>
          </div>
          <img src="https://github.com/sidneiferreirati.png" alt="" />
        </div>
      </Link>
    </Container>
  );
}
