import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "./styles";
import { FaArrowLeft } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";

export function Create() {
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">
          <ButtonText title="Voltar" icon={FaArrowLeft} />
        </Link>

        <h1>Novo Filme</h1>
        <form action="">
          <div className="dual">
            <Input placeholder="Título" />
            <Input placeholder="Título" />
          </div>

          <textarea name="" id="" placeholder="Observações"></textarea>

          <h2>Marcadores</h2>

          <section>
            <button className="excluir">
              React <RiCloseFill />{" "}
            </button>
            <button className="new">
              Novo Marcador <IoIosAdd />{" "}
            </button>
          </section>
          <div className="dual">
            <Button title="Excluir filme"></Button>
            <Button title="Salvar alterações"></Button>
          </div>
        </form>
      </main>
    </Container>
  );
}
