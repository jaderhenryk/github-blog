import { HeaderContainer } from "./styles";

import headerCover from "../../assets/header-cover.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerCover} alt="Github Blog Cover" />
    </HeaderContainer>
  )
}