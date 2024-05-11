import { Slider, Stack, Text, rem } from "@mantine/core";
import ReactApexChart from "react-apexcharts";

import { chart } from "./Chart";
import classes from "./styles.module.css";

export const ProfitChart = () => {
  return (
    <div>
      <div className={classes.calculationsWrapper}>
        <div className={classes.sliderWrap}>
          <Slider
            className={classes.slider}
            size="xl"
            marks={[
              { value: 20, label: "20$" },
              { value: 5000, label: "5000$" },
            ]}
            min={20}
            max={5000}
          />
          <Text variant="text-2">Your deposit</Text>
        </div>
        <div className={classes.sliderWrap}>
          <Slider
            className={classes.slider}
            size="xl"
            marks={[
              { value: 1, label: "1 day" },
              { value: 50, label: "50 days" },
            ]}
            min={1}
            max={50}
          />
          <Text variant="text-2">Length of investment</Text>
        </div>

        <Text className={classes.profitMain} variant="text-1">
          Profit: <Text className={classes.profit}>140$</Text>
        </Text>
      </div>
      <Stack gap={rem("27px")}>
        <div id="chart" className={classes.chartTable}>
          <ReactApexChart options={chart.options} series={chart.series} type="line" height={512} />
        </div>
        <div id="html-dist"></div>
      </Stack>
    </div>
  );
};
