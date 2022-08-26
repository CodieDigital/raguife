import React from "react";
import { useEffect, useState } from "react";

import {
  AvaliacoesComponent,
  DefinicoesComponent,
  DescricaoComponent,
} from "./tabs-card";

import * as S from "./styles";

const TabsProducts = [
  {
    id: 1,
    title: "Descrição",
    component: <DescricaoComponent />,
  },
  {
    id: 2,
    title: "Definições técnicas",
    component: <DefinicoesComponent />,
  },
  {
    id: 3,
    title: "Avaliações",
    component: <AvaliacoesComponent />,
  },
];

export default function TabsSectionComponent() {
  const [tab, setTab] = useState<JSX.Element>(TabsProducts[0].component);
  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  if (!size) {
    return <></>;
  }

  return (
    <S.TabsSection>
      <div className="tab-container">
        <div className="tabs-actions">
          {TabsProducts.map(({ component, id, title }) => (
            <React.Fragment key={title + id}>
              <div className="tab-container">
                <button
                  className={`button-tab ${component === tab && "active"}`}
                  type="button"
                  onClick={() => setTab(component)}
                >
                  <span className="paragraph-2-bold uppercase">{title}</span>
                </button>

                {size.width <= 1024 && tab === component && (
                  <div className="tab-element">{tab}</div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>

        {tab && size.width > 1024 && <div className="tab-element">{tab}</div>}
      </div>
    </S.TabsSection>
  );
}
