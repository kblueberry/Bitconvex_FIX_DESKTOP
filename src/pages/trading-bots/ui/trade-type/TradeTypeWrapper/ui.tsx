import { Stack, Text, Title, rem } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import commonStyles from "../../../styles.module.css";
import { TradeTypeProps } from "../TradeTypes";
import classes from "./styles.module.css";

export const TradeTypeWrapper = ({ title, profit, minInvestment, risk, selected }: TradeTypeProps) => {
  const [isActive, setIsActive] = useState<boolean>(selected);

  const selectType = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack gap={rem("16px")} className={clsx(classes.tradeWrapper, selected ? classes.active : classes.inactive)} onClick={selectType}>
      <Title fz={{ 0: 22, md: 24 }} order={4} className={clsx(classes.tradeTitle, commonStyles.userSelectForbidden)}>
        {title}
      </Title>
      <Text className={clsx(classes.tradeInfoText, commonStyles.userSelectForbidden)}>
        <b className={classes.subTitle}>Profit:</b> up to {profit}% per day
      </Text>
      <div className={classes.tradeDescription}>
        <Text className={clsx(classes.tradeInfoText, commonStyles.userSelectForbidden)}>
          <b className={classes.subTitle}>Min. investment:</b> {minInvestment}$
        </Text>
        <Text className={clsx(classes.tradeInfoText, commonStyles.userSelectForbidden)}>
          <b className={classes.subTitle}>Risk:</b> {risk}%
        </Text>
      </div>
    </Stack>
  );
};
