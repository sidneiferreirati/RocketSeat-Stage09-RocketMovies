import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegUser, FaLongArrowAltLeft  } from "react-icons/fa";

export function SignUp() {
  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <form action="">
          <Input placeholder="Nome" icon={FaRegUser}></Input>
          <Input placeholder="E-mail" icon={MdOutlineEmail}></Input>
          <Input placeholder="Senha" icon={RiLockPasswordFill}></Input>
          <Button title="Cadastrar" />
        </form>
        <ButtonText title="Voltar para o login" icon={FaLongArrowAltLeft} />
      </header>
      <div id="background"></div>
    </Container>
  );
}
