import { useResize } from "@/hooks/useResize";
import { Button, Image, Stack, rem } from "@mantine/core";

import { Container, StartTradingIcon } from "@/shared/ui";

import commonClasses from "../../styles.module.css";
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
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/trading-bots/cube_2.png`}
          alt="cube-2"
          className={commonClasses.cubeTwo}
        />
        <Image
          draggable={false}
          src={`${import.meta.env.BASE_URL}assets/light/trading-bots/light_cube.png`}
          alt="light-cube-2"
          className={commonClasses.lightCubeTwo}
        />
      </Container>
    </Stack>
  );
};
