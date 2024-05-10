import { Box, Button, Group, Stack, Text, Title, rem } from "@mantine/core";
import { Link } from "atomic-router-react";
import clsx from "clsx";
import { motion } from "framer-motion";

import { routes } from "@/shared/routing";
import { Container, StartTradingIcon } from "@/shared/ui";

import classes from "./styles.module.css";

export const Banner = () => {
  return (
    <Container>
      <Group gap={rem(32)} className={classes.bannerWrapper}>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: "-100%",
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={clsx(classes.motionContainer, classes.left)}
        >
          <Stack gap={"clamp(2rem, 3vw, 3rem)"} className={classes.bannerLeftSide}>
            <Title c="white" order={1} fz={70} className={classes.bannerTitle}>
              Trade cryptocurrencies <br />
              like a pro with <br />
              <Text span className={classes.bannerTitleColoredPart}>
                automation tools
              </Text>
            </Title>

            <Text c="white" className={classes.bannerSubTitle}>
              Discover and replicate popular trading strategies on the largest exchange with unrivaled liquidity. Choose your tariff and start earning
              money, but don’t forget about risk management.
            </Text>
            <Group align={"center"} justify={"flex-start"} className={classes.tradeActions}>
              <Link to={routes.trade}>
                <Button size="extra-large" variant="radial-gradient" className={classes.bannerButton} rightSection={<StartTradingIcon />}>
                  START TRADING
                </Button>
              </Link>
              <div className={classes.activeStatistics}>
                <Text variant="text-1">
                  <b>Active Strategies:</b> 56.150
                </Text>
                <Text variant="text-1">
                  <b>Total cost:</b> $48.692.023
                </Text>
              </div>
            </Group>
          </Stack>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              x: "100%",
            },
            visible: {
              opacity: 1,
              x: 0,
            },
          }}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={clsx(classes.motionContainer, classes.right)}
        >
          <Box className={classes.bannerRightSide}>
            <img draggable="false" className={classes.mainRobot} src={`${import.meta.env.BASE_URL}assets/trading-bots/Main_robot.png`} alt="banner" />
            <img draggable="false" className={classes.bitcoinOne} src={`${import.meta.env.BASE_URL}assets/trading-bots/Bitcoin-1.png`} alt="banner" />
            <img draggable="false" className={classes.bitcoinTwo} src={`${import.meta.env.BASE_URL}assets/trading-bots/Bitcoin-2.png`} alt="banner" />
            <img
              draggable="false"
              className={classes.etheriumTwo}
              src={`${import.meta.env.BASE_URL}assets/trading-bots/Etherium-2.png`}
              alt="banner"
            />
            <img draggable="false" className={classes.liteCoin} src={`${import.meta.env.BASE_URL}assets/trading-bots/LiteCoin-1.png`} alt="banner" />
          </Box>
        </motion.div>
      </Group>
    </Container>
  );
};
