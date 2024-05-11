import { Box, Flex, Stack, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { Container } from "@/shared/ui/container/ui";

import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle/ui";
import { SelectCoin } from "./SelectCoin";
import { TradeTypeWrapper } from "./TradeTypeWrapper";
import classes from "./styles.module.css";

export interface TradeTypeProps {
  title: string;
  profit: number;
  minInvestment: number;
  risk: number;
  selected: boolean;
}

const TRADE_TYPES = [
  {
    title: "Lite Trading",
    profit: 0.5,
    minInvestment: 300,
    risk: 0.5,
    selected: true,
  },
  {
    title: "Medium Trading",
    profit: 1,
    minInvestment: 300,
    risk: 1,
    selected: false,
  },
  {
    title: "Active Trading",
    profit: 1.7,
    minInvestment: 100,
    risk: 3.1,
    selected: false,
  },
  {
    title: "High Risk Trading",
    profit: 3,
    minInvestment: 250,
    risk: 10.3,
    selected: false,
  },
] as TradeTypeProps[];

export const TradeType = () => {
  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack gap={rem(64)}>
          <HighlightedBlueTitle title="Trade" subTitle="type" />

          <Flex gap={rem("32px")} justify={"space-between"}>
            <SelectCoin className="selectTradeOptionsWrapper" />
            <Box className={classes.tradeTypesWrapper}>
              {TRADE_TYPES.map((type, index) => (
                <motion.div
                  className={classes.tradeType}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: "-70%",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 + (index + 1) * 0.2 }}
                >
                  <TradeTypeWrapper
                    title={type.title}
                    profit={type.profit}
                    minInvestment={type.minInvestment}
                    risk={type.risk}
                    selected={type.selected}
                  />
                </motion.div>
              ))}
            </Box>
          </Flex>
        </Stack>
      </Container>
    </Stack>
  );
};
