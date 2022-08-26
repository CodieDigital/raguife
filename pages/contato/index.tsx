import { Layout } from "components/layout";
import { ContactComponent } from "components/sections/home/contact";

import * as S from "styles/pages/contact";

export default function ContactPage() {
  return (
    <S.Contact>
      <Layout>
        <ContactComponent linksContato />
      </Layout>
    </S.Contact>
  );
}
