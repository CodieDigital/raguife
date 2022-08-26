import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
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

      {children}

      <FooterComponent/>
    </S.Layout>
  );
}
