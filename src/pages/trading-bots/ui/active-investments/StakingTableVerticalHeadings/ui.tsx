import { Divider, Flex, Group, Pagination, Stack, Table, Text, TextInput, Title, rem } from "@mantine/core";
import clsx from "clsx";

import { NextIcon, PreviousIcon, SearchIcon } from "@/shared/ui";

import { INVESTMENTS_WITH_HEADINGS } from "../Investments";
import classes from "./styles.module.css";

export const StakingTableVerticalHeadings = () => {
  return (
    <Stack className={classes.wrapper}>
      <Stack className={classes.box} gap={0}>
        <Flex justify={"space-between"} align={"center"} mb={rem("32px")}>
          <Title order={4}>Active investments</Title>
          <TextInput
            size="lg"
            classNames={{
              input: classes.searchInput,
              wrapper: classes.searchInputWrapper,
            }}
            leftSection={<SearchIcon />}
            placeholder="Search"
          />
        </Flex>

        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} />
        <div className={classes.tableContainer}>
          <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
            <Table.Tbody classNames={{ tbody: classes.tableBody }}>
              {INVESTMENTS_WITH_HEADINGS.map((investment, index) => (
                <Table.Tr key={index}>
                  <Table.Th w={"135"} className={classes.tableHeadingCell}>
                    {investment.heading}
                  </Table.Th>
                  {investment.coins.map((coin) => {
                    if (typeof coin !== "object") {
                      return (
                        <Table.Td
                          w={"275"}
                          className={clsx(
                            classes.tableCellWithLeftIndent,
                            { [classes.linkButton]: coin === "Stop" },
                            { [classes.plAmount]: investment.heading === "Pl" },
                          )}
                        >
                          {coin}
                        </Table.Td>
                      );
                    } else {
                      return (
                        <Table.Td w={"225"} px={15} className={classes.tbodyTdWithIcon}>
                          <Group gap={rem(8)}>
                            {coin.icon}
                            <Title c="white" order={4}>
                              {coin.name}
                            </Title>
                          </Group>
                        </Table.Td>
                      );
                    }
                  })}
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
        <Divider size="xs" classNames={{ root: classes.ratesDividerRoot }} mt={rem("32px")} />

        <Group justify={"space-between"} mt={rem("32px")}>
          <Text variant="text-4" className={classes.greyText}>
            1-20 of 9,383 assets
          </Text>
          <Pagination total={20} defaultValue={1}>
            <Group gap={0} justify="center">
              <Pagination.Previous icon={PreviousIcon} />
              <Pagination.Items />
              <Pagination.Next icon={NextIcon} />
            </Group>
          </Pagination>
        </Group>
      </Stack>
    </Stack>
  );
};
