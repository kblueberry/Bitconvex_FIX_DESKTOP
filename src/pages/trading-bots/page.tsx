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
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
        <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

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
