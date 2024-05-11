import { Stack, rem } from "@mantine/core";

import { StakingTable } from "@/pages/staking/ui";

import { Container } from "@/shared/ui";

import classes from "./styles.module.css";

export const ActiveInvestments = () => {
  return (
    <Stack className={classes.wrapper} gap={rem(64)}>
      <Container>
        <StakingTable />
      </Container>
    </Stack>
  );
};
