import { Slider, Stack, Text, rem } from "@mantine/core";
import Chart from "react-apexcharts";

import { chart } from "./Chart";
import classes from "./styles.module.css";

export const ProfitChart = () => {
  return (
    <div>
      <div className={classes.calculationsWrapper}>
        <div className={classes.sliderWrap}>
          <Slider
            classNames={{
              trackContainer: classes.sliderTrack,
              label: classes.sliderThumbLabel,
              mark: classes.sliderMark,
              markWrapper: classes.sliderMarkWrapper,
              markLabel: classes.sliderMarkLabel,
              root: classes.slider,
            }}
            size="xl"
            marks={[
              { value: 20, label: "20$" },
              { value: 5000, label: "5000$" },
            ]}
            min={20}
            max={5000}
            labelAlwaysOn
          />
          <Text variant="text-2" className={classes.sliderName}>
            Your deposit
          </Text>
        </div>
        <div className={classes.sliderWrap}>
          <Slider
            classNames={{
              trackContainer: classes.sliderTrack,
              label: classes.sliderThumbLabel,
              mark: classes.sliderMark,
              markWrapper: classes.sliderMarkWrapper,
              markLabel: classes.sliderMarkLabel,
              root: classes.slider,
            }}
            size="xl"
            marks={[
              { value: 1, label: "1 day" },
              { value: 50, label: "50 days" },
            ]}
            min={1}
            max={50}
            labelAlwaysOn
          />
          <Text variant="text-2" className={classes.sliderName}>
            Length of investment
          </Text>
        </div>

        <Text className={classes.profitMain} variant="text-1">
          Profit: <Text className={classes.profit}>140$</Text>
        </Text>
      </div>
      <Stack gap={rem("27px")}>
        <div id="chart" className={classes.chartTable}>
          <Chart options={chart.options} series={chart.series} height={512}></Chart>
        </div>
        <div id="html-dist"></div>
      </Stack>
    </div>
  );
};
