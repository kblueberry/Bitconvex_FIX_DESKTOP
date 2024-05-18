import { Button, Stack, rem } from "@mantine/core";

import { Container, StartTradingIcon } from "@/shared/ui";

import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle";
import { ProfitChart } from "./ProfitChart/ui";
import classes from "./styles.module.css";

export const CalculateProfit = () => {
  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack gap={rem(64)}>
          <HighlightedBlueTitle title="Calculate" subTitle="Your Profit" />
          <ProfitChart />
          <Button variant="radial-gradient" className={classes.mainButton} rightSection={<StartTradingIcon />}>
            ACTIVATE BOT
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
