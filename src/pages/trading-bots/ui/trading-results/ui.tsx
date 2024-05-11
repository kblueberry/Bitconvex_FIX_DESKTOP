import { Grid, Image, Stack, Text, Title, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { BitcoinIcon, Container } from "@/shared/ui";

import classes from "./styles.module.css";
import { TradingResult } from "./tradingResult/ui";

export interface TradeResultProps {
  name: string;
  icon: React.ReactNode;
  instruments: Array<string>;
  percent: number;
  shortName: string;
}

const TRADING_RESULTS = [
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 180,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 190,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 188,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
  {
    name: "Bitcoin",
    icon: <BitcoinIcon />,
    percent: 178,
    shortName: "BTC",
    instruments: ["AI", "Trading Bot"],
  },
] as TradeResultProps[];

export const TradingResults = () => {
  return (
    <Stack gap={rem("48px")} className={classes.wrapper}>
      <Container>
        <Stack gap={rem(32)}>
          <Title c="white" order={1} fz={54} className={classes.tradingTitle}>
            Best trading results in
            <Text span className={classes.tradingTitleColored}>
              24 hours
            </Text>
          </Title>

          <Grid gutter={{ 0: 16, md: 30 }} align={"stretch"} className={classes.wrapper}>
            {TRADING_RESULTS.map((result, i) => {
              return (
                <Grid.Col key={result.name} span={{ xs: 6, sm: 6, md: 3, lg: 3, xl: 3 }} className={classes.col}>
                  <motion.div
                    className={classes.rateWrap}
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
                    transition={{ duration: 0.8, delay: 0.4 + (i + 1) * 0.2 }}
                  >
                    <TradingResult {...result} />
                  </motion.div>
                </Grid.Col>
              );
            })}
            {/* <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/4.png`} alt="main-light-4" className={classes.lightFour} /> */}
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
};
