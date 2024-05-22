import { Group, Table, rem } from "@mantine/core";
import clsx from "clsx";
import { useMemo } from "react";

import { MarketSortIcon } from "..";
import classes from "./styles.module.css";

interface TableProps {
  headers: Array<any>;
  tableCoins: Array<any>;
}

const headers = useMemo(() => {
  return HEADERS.map((header) => {
    return (
      <Table.Th key={header.label} className={header.className}>
        <Group
          gap={rem("2px")}
          justify={header.sortable ? "flex-start" : "center"}
          className={clsx(classes.tableHeadSortLabel, {
            [classes.tableHeadSortLabelSortingDesc]: sortingLabel === header.label && sortingDirection === "DESC",
          })}
          onClick={header.sortable ? () => onTableHeadSortLabelClick(header.label as SortingLabel) : undefined}
        >
          <Text c="inherit" variant="text-5" span>
            {header.label}
          </Text>
          {header.sortable ? <MarketSortIcon /> : null}
        </Group>
      </Table.Th>
    );
  });
}, [onTableHeadSortLabelClick, sortingDirection]);

export const CoinsTable = () => {
  return (
    <Table classNames={{ tr: classes.tableTr, td: classes.tableTd }} verticalSpacing={rem("16px")} withRowBorders={true}>
      <Table.Thead classNames={{ thead: classes.tableHead }}>
        <Table.Tr>{headers}</Table.Tr>
      </Table.Thead>
      <Table.Tbody classNames={{ tbody: classes.tableBody }}>{tableCoins}</Table.Tbody>
    </Table>
  );
};
