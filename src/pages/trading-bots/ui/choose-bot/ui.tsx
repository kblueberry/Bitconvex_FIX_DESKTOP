import { Box, Stack, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { Container } from "@/shared/ui";

import { HighlightedBlueTitle } from "../shared/HighlightedBlueTitle/ui";
import { BotInfo } from "./BotInfo/ui";
import classes from "./styles.module.css";

export interface BotProps {
  title: string;
  description: string;
  benefit: string;
}

const BOTS = [
  {
    title: "AI Trading \nBot",
    description:
      "Operating on the principle of continuous data collection and experience from major players, our bot automatically adapts to market dynamics, ensuring optimal trading strategies. Trust your investments to a professional approach and enjoy the growth of your portfolio hassle-free. ",
    benefit: "185%",
  },
  {
    title: "Smart Money Trading Bot",
    description:
      "Utilizing the Smart Money concept and possessing extensive market cycle statistics, it trades taking into account indicators such as OB, BOS, FVG, SSL/BSL, and other entry factors. Rely on our bot to achieve consistent profits and confidently manage your cryptocurrency portfolio. ",
    benefit: "60%",
  },
  {
    title: "Technical Analysis Trading Bot",
    description:
      "It operates based on finding valid entry zones, including structure breakout, analysis of key levels, classical chart patterns, and formations. Trust our bot to identify optimal entry points in the market and manage your cryptocurrency portfolio with confidence. ",
    benefit: "48%",
  },
  {
    title: "Scalping Trading \nBot",
    description:
      "It operates on the principle of scalping, where each trade takes only a few minutes. Utilizing Smart Money methods and technical analysis, the script seeks the optimal entry point, which will be open for up to 30 minutes. Trust our bot to achieve consistent profits and confidently manage your cryptocurrency portfolio. ",
    benefit: "83%",
  },
] as BotProps[];

export const ChooseBot = () => {
  return (
    <Stack className={classes.wrapper}>
      <Container>
        <Stack gap={rem(64)}>
          <HighlightedBlueTitle title="Choose" subTitle="Your Bot" />

          <Box className={classes.botsWrapper}>
            {BOTS.map((bot, index) => (
              <motion.div
                className={classes.bot}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: "-70%",
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + (index + 1) * 0.2 }}
              >
                <BotInfo {...bot} />
              </motion.div>
            ))}
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};
