import { Text, Title } from "@mantine/core";

import classes from "./styles.module.css";

export const HighlightedBlueTitle = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <Title order={1} fz={54} className={classes.mainTitle}>
      {title}
      <Text span className={classes.subTitle}>
        {subTitle}
      </Text>
    </Title>
  );
};
