import { Stack, rem } from "@mantine/core";

import { StakingTable } from "@/pages/staking/ui";

import { Container } from "@/shared/ui";

import { INVESTMENTS, INVESTMENT_TABLE_HEADERS } from "./Investments";
import classes from "./styles.module.css";

export const ActiveInvestments = () => {
  return (
    <Stack className={classes.wrapper} gap={rem(64)}>
      <Container>
        <StakingTable usedForTradingBot={true} tableHeaders={INVESTMENT_TABLE_HEADERS} tableData={INVESTMENTS} />
      </Container>
    </Stack>
  );
};
