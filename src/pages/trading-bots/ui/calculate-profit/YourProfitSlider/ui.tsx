import { Slider } from "@mantine/core";

import classes from "./styles.module.css";

export const YourProfitSlider = () => {
  return (
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
  );
};
