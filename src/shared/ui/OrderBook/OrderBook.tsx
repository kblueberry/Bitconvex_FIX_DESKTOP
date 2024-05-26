import { useResize } from "@/hooks/useResize";
import { Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { Container } from "../TradePageContainer/Container";
import classes from "./OrderBook.module.css";
import { OrderBookDesktop } from "./OrderBookDesktop";
import { OrderBookMobile } from "./OrderBookMobile";

const categories = ["All", "Asks", "Bids"] as const;

export const OrderBook = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const { isAdaptive: md } = useResize(1200);
  return (
    <Container className={classes.content} style={{ height: "100%" }}>
      <Stack gap={"clamp(1rem, 2vw, 2rem)"} h={"100%"}>
        <Text className={classes.orderBookTitle}>Order Book</Text>
        <div className={classes.orderBookButtonsWrapper}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={clsx(classes.orderBooksButton, { [classes.active]: activeCategory === cat })}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {md ? <OrderBookMobile {...{ activeCategory }} activeTab="Chart" /> : <OrderBookDesktop {...{ activeCategory }} />}
      </Stack>
    </Container>
  );
};
