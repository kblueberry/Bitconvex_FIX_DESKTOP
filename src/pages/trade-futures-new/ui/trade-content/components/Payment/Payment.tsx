import { useResize } from "@/hooks/useResize";
import { Group, Stack, Text } from "@mantine/core";

import { Coins } from "@/shared/ui/Coins/Coins";
import { Tabs } from "@/shared/ui/tabs";

import { Container } from "../Container/Container";
import containerClasses from "../Container/Container.module.css";
import classes from "../TradeChart/TradeChart.module.css";
import { BuyTab } from "./components/tabs/BuyTab/BuyTab";
import { SellTab } from "./components/tabs/SellTab/SellTab";

const tabs = [
  { id: "buy", title: "Buy", content: <BuyTab /> },
  { id: "sell", title: "Sell", content: <SellTab /> },
];
export const Payment = () => {
  const { isAdaptive: md } = useResize(1200);

  return (
    <Stack className={containerClasses.payment}>
      <Container style={{ padding: "2rem clamp(1.5rem, 2vw, 2rem) 2rem clamp(1.5rem, 2vw, 2rem)" }}>
        {md && (
          <>
            <Group gap={8} className={classes.tradeChartWrapper}>
              <Text className={classes.tradeChartTitle}>Bitcoin/USDT Chart</Text>
              <Coins />
            </Group>
          </>
        )}

        <Tabs overflowContainer={false} tabs={tabs} />
      </Container>
    </Stack>
  );
};
