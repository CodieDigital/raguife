import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import * as S from "./styles";
import { ButtonWhats } from "./btn-whats";

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
