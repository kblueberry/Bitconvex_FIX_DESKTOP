import { Button } from "@mantine/core";
import { Link } from "atomic-router-react";

import { routes } from "../../routing";
import { StartTradingIcon } from "../icon/icons";
import classes from "./styles.module.css";

export const BannerButton = ({ size, text }: { size: string; text: string }) => {
  return (
    <Link to={routes.trade} className={classes.homeButton}>
      <Button {...{ size }} variant="radial-gradient" className={classes.bannerButton} rightSection={<StartTradingIcon />}>
        {text}
      </Button>
    </Link>
  );
};
