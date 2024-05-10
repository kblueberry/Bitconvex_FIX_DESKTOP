import { Stack } from "@mantine/core";

import { Banner } from "./banner";

export const TradingBotsMain = () => {
  return (
    <Stack gap={32} py={64}>
      {/* <p style={{ color: "green" }}>Hello bots!</p> */}
      <Banner />
    </Stack>
  );
};
