import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";
import { ButtonWhats } from "./btn-whats";

import * as S from "./styles";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <HeaderComponent />

      <button className="cmp-revoke-consent">Revoke Consent</button>

      <ButtonWhats />

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
