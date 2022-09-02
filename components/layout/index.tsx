import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import { ButtonWhats } from "./btn-whats";

import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({
  children
}: LayoutProps) {
  return (
    <S.Layout>
      <HeaderComponent/>

      <ButtonWhats/>

      {children}

      <FooterComponent/>
    </S.Layout>
  );
}
