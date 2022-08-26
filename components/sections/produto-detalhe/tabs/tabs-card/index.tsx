import * as S from "./styles";

export function DescricaoComponent() {
  return (
    <S.TabContent>
      <div className="content">
        <p>
          <strong>Sinopse:</strong>
        </p>

        <p>
          Em um mundo no qual Chamas Gêmeas são reais, muitos encontravam sua
          outra metade. Mas isso não impediu que Alisson Rood ignorasse a
          tatuagem que surgiu em seu punho e seguisse com sua vida promíscua.
          Entretanto, após descobrir que sua Chama Gêmeas é ninguém mais ninguém
          menos que Lilian Azura, o conhecido prodígio do curso de música que o
          despreza por conta das consequências de suas ações impensadas, Alisson
          acaba desenvolvendo uma doença nada sutil, que muda a vida dos dois e
          de seus amigos.
        </p>
      </div>
    </S.TabContent>
  );
}

export function DefinicoesComponent() {
  return (
    <S.TabContent>
      <div className="content">
        <p>Definicoes</p>
      </div>
    </S.TabContent>
  );
}

export function AvaliacoesComponent() {
  return (
    <S.TabContent>
      <div className="content">
        <p>Avaliacoes</p>
      </div>
    </S.TabContent>
  );
}
