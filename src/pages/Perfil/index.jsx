import { Container } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FiUser } from "react-icons/fi";

import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GiPadlockOpen, GiPadlock } from "react-icons/gi";
import { Link } from "react-router-dom";

export function Perfil() {
  return (
    <Container>
      <header>
        <Link to="/">
          <ButtonText title="Voltar" icon={FaArrowLeft} />
        </Link>
      </header>
      <div id="profile">
        <img src="https://github.com/sidneiferreirati.png" alt="" />
        <form action="">
          <Input placeholder="Rodrigo Gonçalves" icon={FiUser} />
          <Input placeholder="rodrigo@gmail.com" icon={MdOutlineEmail} />
          <Input placeholder="Senha Atual" icon={GiPadlockOpen} />
          <Input placeholder="Nova senha" icon={GiPadlock} />
          <Button title="Salvar"></Button>
        </form>
      </div>
    </Container>
  );
}
