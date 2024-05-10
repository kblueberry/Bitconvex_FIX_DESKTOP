import { Box } from "@mantine/core";

import classes from "./styles.module.css";

export const BannerImage = () => {
  return (
    <Box className={classes.bannerRightSide}>
      <img draggable="false" className={classes.mainRobot} src={`${import.meta.env.BASE_URL}assets/trading-bots/Main_robot.png`} alt="banner" />
      <img draggable="false" className={classes.bitcoinOne} src={`${import.meta.env.BASE_URL}assets/trading-bots/Bitcoin-1.png`} alt="banner" />
      <img draggable="false" className={classes.bitcoinTwo} src={`${import.meta.env.BASE_URL}assets/trading-bots/Bitcoin-2.png`} alt="banner" />
      <img draggable="false" className={classes.etheriumTwo} src={`${import.meta.env.BASE_URL}assets/trading-bots/Etherium-2.png`} alt="banner" />
      <img draggable="false" className={classes.liteCoin} src={`${import.meta.env.BASE_URL}assets/trading-bots/LiteCoin-1.png`} alt="banner" />
    </Box>
  );
};
