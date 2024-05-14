import { useResize } from "@/hooks/useResize";
import { Box, Group, Stack, Text, Title, rem } from "@mantine/core";
import { motion } from "framer-motion";

import { Container } from "@/shared/ui";
import { StartTradingBtn } from "@/shared/ui/startTradingBtn/ui";

import classes from "./styles.module.css";

export const Banner = () => {
  const { isAdaptive: md } = useResize(1200);
  return (
    <Container>
      <Group gap={rem(48)} className={classes.bannerWrapper}>
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
        >
          <Stack gap={"clamp(2rem, 3vw, 3rem)"} className={classes.bannerLeftSide}>
            <Title c="white" order={1} fz={79} className={classes.bannerTitle}>
              The World's <br />
              Premier Crypto <br />
              <Text span className={classes.bannerTitleColoredPart}>
                Trading Platform
              </Text>
            </Title>
            {md && (
              <Box className={classes.bannerRightSide}>
                <img draggable="false" src={`${import.meta.env.BASE_URL}assets/banner-icon.png`} alt="banner" width="100%" />
              </Box>
            )}

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
              transition={{ duration: 1, delay: 0.15 }}
            >
              <Stack gap={"clamp(2rem, 4vw, 4rem)"}>
                <Text size={md ? "18px" : "24px"} c="white" className={classes.bannerSubTitle}>
                  Join the Rapidly Expanding Global Crypto Exchange
                </Text>
                <StartTradingBtn />
              </Stack>
            </motion.div>
          </Stack>
        </motion.div>

        {!md && (
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
          >
            <Box className={classes.bannerRightSide}>
              <img draggable="false" src={`${import.meta.env.BASE_URL}assets/banner-icon.png`} alt="banner" width="100%" />
            </Box>
          </motion.div>
        )}
      </Group>
    </Container>
  );
};
