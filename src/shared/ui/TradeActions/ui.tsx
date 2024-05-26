import { Button, rem } from "@mantine/core";
import clsx from "clsx";

import { TradeIcon } from "@/shared/ui/icon/TradeIcon";

import classes from "./TradeActions.module.css";

interface TradeActionProps {
  actionsTitle: string;
  buyLabel: string;
  sellLabel: string;
}

export const TradeActions = ({ actionsTitle, buyLabel, sellLabel }: TradeActionProps) => {
  return (
    <div className={classes.tradeActionsView}>
      <div className={classes.tradeActionsFlexContainer}>
        <button className={classes.tradeIconButton}>
          <TradeIcon />
          <p className={classes.tradeButtonLabel}>{actionsTitle}</p>
        </button>
        <div className={classes.stockActions}>
          <Button className={clsx(classes.btn, classes.actionButton)} h={rem("54px")} variant="success">
            {buyLabel}
          </Button>
          <Button className={clsx(classes.btn, classes.actionButton)} h={rem("54px")} variant="danger">
            {sellLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
