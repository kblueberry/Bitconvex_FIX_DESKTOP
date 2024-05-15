import { Box, Image } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";

import { Footer, Header, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";
import { ActiveInvestments } from "./ui/active-investments";
import { CalculateProfit } from "./ui/calculate-profit/ui";
import { ChooseBot } from "./ui/choose-bot/ui";
import { TradeType } from "./ui/trade-type/ui";
import { Banner } from "./ui/trading-bots-main/banner/ui";
import { TradingResults } from "./ui/trading-results/ui";

export function Page() {
  return (
    <Wrapper>
      <Box pos={"relative"}>
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_3.png`}
          alt="light-3"
          className={classes.lightThree}
        />

        <Header />
        <Banner />
        <TradingResults />
        <ChooseBot />
        <TradeType />
        <CalculateProfit />
        <ActiveInvestments />
        <Footer />
      </Box>
    </Wrapper>
  );
}
