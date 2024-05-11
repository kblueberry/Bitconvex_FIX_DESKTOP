import { Slider, Stack, Text, rem } from "@mantine/core";
import ReactApexChart from "react-apexcharts";

import { chart } from "./Chart";
import classes from "./styles.module.css";

export const ProfitChart = () => {
  return (
    <div>
      <div className={classes.calculationsWrapper}>
        <Slider
          className={classes.slider}
          color="#625ff8"
          size="xl"
          marks={[
            { value: 20, label: "20$" },
            { value: 5000, label: "5000$" },
          ]}
          min={20}
        />
        <Slider
          className={classes.slider}
          color="#625ff8"
          size="xl"
          marks={[
            { value: 20, label: "20$" },
            { value: 5000, label: "5000$" },
          ]}
          min={20}
        />
        <Text>Profit: 140$</Text>
      </div>
      <Stack gap={rem("27px")}>
        <div id="chart" className={classes.chartTable}>
          <ReactApexChart options={chart.options} series={chart.series} type="line" height={350} />
        </div>
        <div id="html-dist"></div>
      </Stack>
    </div>
  );
};
