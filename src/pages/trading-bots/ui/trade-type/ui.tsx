import { Box, Flex, Stack, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { Container } from "@/shared/ui/container/ui";

import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle/ui";
import { SelectCoin } from "./SelectCoin";
import { TradeTypeWrapper } from "./TradeTypeWrapper";
import { TRADE_TYPES } from "./TradeTypes";
import classes from "./styles.module.css";

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
