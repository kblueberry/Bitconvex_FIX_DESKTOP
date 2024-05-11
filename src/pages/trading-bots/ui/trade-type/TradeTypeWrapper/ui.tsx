import { Group, Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { TradeTypeProps } from "../ui";
import classes from "./styles.module.css";

export const TradeTypeWrapper = ({ title, profit, minInvestment, risk, selected }: TradeTypeProps) => {
  const [isActive, setIsActive] = useState<boolean>(selected);

  const selectType = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack
      gap={rem("16px")}
      className={clsx(classes.tradeWrapper, selected ? classes.active : classes.inactive)}
      justify={"space-between"}
      onClick={selectType}
    >
      <Group gap={rem("12px")}>
        <Title fz={{ 0: 22, md: 24 }} order={4} className={classes.tradeTitle}>
          {title}
        </Title>
        <Text className={classes.tradeInfoText}>
          <b className={classes.subTitle}>Profit:</b> up to {profit}% per day
        </Text>
        <Text className={classes.tradeInfoText}>
          <b className={classes.subTitle}>Min. investment:</b> {minInvestment}%
        </Text>
        <Text className={classes.tradeInfoText}>
          <b className={classes.subTitle}>Risk:</b> {risk}%
        </Text>
      </Group>
    </Stack>
  );
};
