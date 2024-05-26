import { Stack, Text } from "@mantine/core";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { rowsMobile } from "@/shared/config/OrderBook.constants";
import { OrderRows } from "@/shared/types/OrderBook.types";

import { Container } from "../Container/Container";
import containerClasses from "../Container/Container.module.css";
import classes from "./OrderBook.module.css";
import { StocksPriceFirst } from "./Stocks/StocksPriceFirst";

export const OrderBookAll = ({ header }: { header: Array<string> }) => {
  const [stockRows, setStockRows] = useState<OrderRows>([]);

  useEffect(() => {
    const newRows: OrderRows = JSON.parse(JSON.stringify(rowsMobile));
    const slicedRows = newRows.slice(0, 4);
    setStockRows(slicedRows);
  }, []);

  return (
    <Stack className={containerClasses.ordersAll}>
      <Container>
        <div className={clsx(classes.flexSpaceBetween, classes.columnDirected)}>
          <StocksPriceFirst header={header} rows={stockRows} isPositive={true} cellsOrderChanged={false} />
          <Text className={classes.tradeOrderBookInfo}>38,555.19</Text>
          <StocksPriceFirst header={header} rows={stockRows} isPositive={false} cellsOrderChanged={false} />
        </div>
      </Container>
    </Stack>
  );
};
