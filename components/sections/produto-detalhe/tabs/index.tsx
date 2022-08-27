import React from "react";
import { useEffect, useState } from "react";
import { Product } from "src/services/shop/get";
import { DescricaoComponent } from "./tabs-card/descricao";
import { Extra1 } from "./tabs-card/extra1";
import { Extra2 } from "./tabs-card/extra2";
import { Extra3 } from "./tabs-card/extra3";
import { Extra4 } from "./tabs-card/extra4";

import * as S from "./styles";
import { Container } from "components/data/container";

interface TabSectionProps {
  product: Product;
}

interface Tab {
  title: string;
  id: number;
  component: JSX.Element;
}

export default function TabsSectionComponent({ product }: TabSectionProps) {
  const [tab, setTab] = useState<Tab | null>(null);
  const [size, setSize] = useState<{ height: number; width: number } | null>(
    null
  );

  const tabs: Tab[] = [
    {
      id: 1,
      title: "Descrição",
      component: <DescricaoComponent detail={product} />,
    },
    {
      id: 2,
      title: "Composição básica",
      component: <Extra1 detail={product} />,
    },
    {
      id: 3,
      title: "Niveis de garantia",
      component: <Extra2 detail={product} />,
    },
    {
      id: 4,
      title: "Enriquecimento",
      component: <Extra3 detail={product} />,
    },
    {
      id: 5,
      title: "Modo de usar",
      component: <Extra4 detail={product} />,
    },
  ];

  const initialTab = tabs[0];

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
      <Container>
        <div className="tab-container">
          <div className="tabs-actions">
            {tabs.map((tabItem) => {
              return (
                <React.Fragment key={tabItem.title}>
                  <div className="tab-container">
                    <button
                      key={tabItem.title}
                      className={`button-tab ${
                        tabItem.title ===
                          (tab ? tab.title : initialTab.title) && "active"
                      }`}
                      type="button"
                      onClick={() => setTab(tabItem)}
                    >
                      <span className="paragraph-1-bold uppercase">
                        {tabItem.title}
                      </span>
                    </button>

                    {(tab || initialTab) && size.width <= 1024 && (
                      <div
                        className={`tab-element ${
                          tabItem.title ===
                            (tab ? tab.title : initialTab.title) && "active"
                        }`}
                      >
                        {tab
                          ? tab.id === tabItem.id && tab.component
                          : initialTab.id === tabItem.id &&
                            initialTab.component}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>

          {(tab || initialTab) && size.width > 1024 && (
            <div className="tab-element">
              {tab ? tab.component : initialTab.component}
            </div>
          )}
        </div>
      </Container>
    </S.TabsSection>
  );
}
