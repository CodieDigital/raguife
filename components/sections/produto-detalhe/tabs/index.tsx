import React from "react";
import { useEffect, useState } from "react";
import { Product } from "src/services/shop/get";
import { Extra } from "./tabs-card/Extra";

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
  const tabs: Tab[] = [
    {
      id: 1,
      title: "Descrição",
      component: <Extra detail={product.descricao} />,
    },
    {
      id: 2,
      title: "Composição básica",
      component: <Extra detail={product.extra1} />,
    },
    {
      id: 3,
      title: "Níveis de garantia",
      component: <Extra detail={product.extra2} type="table1" />,
    },
    {
      id: 4,
      title: "Enriquecimento",
      component: <Extra detail={product.extra3} />,
    },
    {
      id: 5,
      title: "Modo de usar",
      component: <Extra detail={product.extra4} type="table2" />,
    },
  ];

  const [tab, setTab] = useState<Tab>(tabs[0]);
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
      <Container>
        <div className="tab-container">
          <div className="tabs-actions">
            {tabs.map((tabItem) => {
              return (
                <div className="tab-container" key={tabItem.title}>
                  <button
                    key={tabItem.title}
                    className={`button-tab ${
                      tabItem.title === tab.title && "active"
                    }`}
                    type="button"
                    onClick={() => setTab(tabItem)}
                  >
                    <span className="paragraph-1-bold uppercase">
                      {tabItem.title}
                    </span>
                  </button>

                  {size.width <= 1024 && (
                    <div
                      className={`tab-element ${
                        tabItem.title === tab.title && "active"
                      }`}
                    >
                      {tab.id === tabItem.id && tab.component}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {size.width > 1024 && (
            <div className="tab-element">{tab.component}</div>
          )}
        </div>
      </Container>
    </S.TabsSection>
  );
}
