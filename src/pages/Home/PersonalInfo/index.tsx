import { ArrowSquareOut, Buildings, GithubLogo, Users } from "phosphor-react";
import { PersonalInfoContainer } from "./styles";

export function PersonalInfo() {
  return (
    <PersonalInfoContainer>
      <img src="" alt="" width={148} height={148} />
      <div>
        <header>
          <h1>Nome do Usuário</h1>
          <a href="" target="_blank">
            GITHUB <ArrowSquareOut size={16}/>
          </a>
        </header>
        <main>
          <p>Descrição do Usuário</p>
        </main>
        <footer>
          <span>
            <GithubLogo />
            Nome do Usuário
          </span>
          <span>
            <Buildings />
            Nome da Empresa
          </span>
          <span>
            <Users />
            10 Seguidores
          </span>
        </footer>
      </div>
    </PersonalInfoContainer>
  )
}