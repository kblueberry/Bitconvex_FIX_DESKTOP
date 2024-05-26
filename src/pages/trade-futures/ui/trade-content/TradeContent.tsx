import { useResize } from "@/hooks/useResize";
import { Group, Stack } from "@mantine/core";
import { useState } from "react";

import { ButtonTabs } from "@/shared/ui/ButtonTabs/ui";

import { OrderBook } from "../../../../shared/ui/OrderBook/OrderBook";
import { OrderBookMobile } from "../../../../shared/ui/OrderBook/OrderBookMobile";
import classes from "./TradeContent.module.css";
import { MarketStats } from "./components/MarketStats/MarketStats";
import { MarketTrades } from "./components/MarketTrades/MarketTrades";
import { Payment } from "./components/Payment/Payment";
import { TradeActions } from "./components/TradeActions/ui";
import { TradeChart } from "./components/TradeChart/TradeChart";
import { TradeHistory } from "./components/TradeHistory/TradeHistory";

export const TradeContent = () => {
  const { isAdaptive: md } = useResize(1200);
  const categories = ["Chart", "Trade"];
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);

  return (
    <Stack gap={20} py={64}>
      {md ? (
        <Group>
          <ButtonTabs {...{ categories, activeCategory, setActiveCategory }} />
          {activeCategory === "Chart" && (
            <>
              <TradeChart />
              <MarketStats />
              <OrderBook />
            </>
          )}
          {activeCategory === "Trade" && (
            <>
              <div className={classes.tradeTabContainer}>
                <Payment />
                <OrderBookMobile activeTab="Trade" activeCategory="All" />
              </div>
              <TradeHistory />
            </>
          )}
          {activeCategory === "Chart" && <TradeActions />}
        </Group>
      ) : (
        <>
          <Group gap={20} mah={1077} wrap="nowrap" align="stretch">
            <Stack gap={20} w={345}>
              <OrderBook />
              <MarketTrades />
            </Stack>
            <Stack style={{ flex: 1 }} gap={20}>
              <TradeChart />
              <MarketStats />
            </Stack>
            <Payment />
          </Group>
          <TradeHistory />
        </>
      )}
    </Stack>
  );
};
