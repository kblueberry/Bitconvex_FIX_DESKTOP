import { Order } from "@/pages/trade/ui/trade-content/components/OrderBook/OrderBook.types";

export const orderBackgroundStyles = (row: Order, isPositive: boolean) => {
  return {
    background: `linear-gradient(-90deg, rgba(12,13,16,1) ${100 - row.fill}%, ${
      isPositive ? "rgba(90,222,167,0.8)" : "rgba(244, 74, 74, 0.8)"
    } ${100 - row.fill}%)`,
  };
};
