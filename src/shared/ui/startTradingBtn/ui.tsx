import { useResize } from "@/hooks/useResize";
import { Button } from "@mantine/core";
import { Link } from "atomic-router-react";

import { routes } from "../../routing";
import { StartTradingIcon } from "../icon/icons";
import classes from "./styles.module.css";

export const StartTradingBtn = () => {
  const { isAdaptive: md } = useResize(1200);

  return (
    <Link to={routes.trade} className={classes.homeButton}>
      <Button
        size="extra-large"
        style={{
          width: md ? "344px" : "400px",
          height: md ? "92px" : "124px",
          fontSize: md ? "18px" : "20px",
          margin: "0 auto",
        }}
        variant="radial-gradient"
        className={classes.bannerButton}
        rightSection={<StartTradingIcon />}
      >
        START TRADING
      </Button>
    </Link>
  );
};
