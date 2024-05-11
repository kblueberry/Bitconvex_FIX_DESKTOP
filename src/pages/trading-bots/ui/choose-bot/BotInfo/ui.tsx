import { Box, Group, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";

import { BotProps } from "../ui";
import classes from "./styles.module.css";

export const BotInfo = ({ title, description, benefit }: BotProps) => {
  return (
    <Stack gap={rem("16px")} className={classes.botWrapper} justify={"space-between"}>
      <Group gap={rem("12px")}>
        <Title fz={{ 0: 22, md: 24 }} order={4} className={clsx(classes.botTitle, { [classes.long]: title === "Technical Analysis Trading Bot" })}>
          {title}
        </Title>
        <Text className={classes.botInfoText}>{description}</Text>
        <Box className={classes.botBenefitContainer}>
          <Text className={classes.botInfoText}>Profit for last month amounted to {benefit}</Text>
        </Box>
      </Group>
    </Stack>
  );
};
