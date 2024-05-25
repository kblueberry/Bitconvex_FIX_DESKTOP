import clsx from "clsx";

import { Container } from "../Container/Container";
import classes from "../OrderBook/OrderBook.module.css";

export const ButtonTabs = ({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: Array<string>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) => {
  return (
    <Container className={clsx(classes.orderBookButtonsWrapper, classes.tabsWrapper)}>
      {categories.map((cat) => (
        <button
          key={cat}
          className={clsx(classes.orderBooksButton, classes.tabBadge, { [classes.active]: activeCategory === cat })}
          onClick={() => setActiveCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </Container>
  );
};
