import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

export function SignIn() {
  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <form action="">
          <Input placeholder="E-mail" icon={MdOutlineEmail}></Input>
          <Input placeholder="Senha" icon={RiLockPasswordFill}></Input>
          <Button title="Entrar" />
        </form>
        <ButtonText title="Criar conta" />
      </header>
      <div id="background"></div>
    </Container>
  );
}
