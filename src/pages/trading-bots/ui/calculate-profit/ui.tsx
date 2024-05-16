import { useResize } from "@/hooks/useResize";
import { Button, Stack, rem } from "@mantine/core";

import { Container, StartTradingIcon } from "@/shared/ui";

import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle";
import { ProfitChart } from "./ProfitChart/ui";
import classes from "./styles.module.css";

export const CalculateProfit = () => {
  const { isAdaptive: md } = useResize(1200);

  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack gap={rem(64)}>
          <HighlightedBlueTitle title="Calculate" subTitle="Your Profit" />
          <ProfitChart />
          <Button
            variant="radial-gradient"
            style={{
              width: md ? "344px" : "400px",
              height: md ? "92px" : "124px",
              fontSize: md ? "18px" : "20px",
              margin: "0 auto",
            }}
            className={classes.mainButton}
            rightSection={<StartTradingIcon />}
          >
            ACTIVATE BOT
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};
