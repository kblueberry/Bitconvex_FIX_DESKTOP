import { Flex, Image } from "@mantine/core";
import "react-circular-progressbar/dist/styles.css";

import { DepositsBox } from "@/pages/deposit/ui";
import { WithdrawBox } from "@/pages/withdraw/ui";

import { Container, Footer, Header, Sidebar, Wrapper } from "@/shared/ui";

import classes from "./styles.module.css";

export function Page() {
  return (
    <Wrapper>
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/main/1.png`} alt="main-light-1" className={classes.lightOne} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/2.png`} alt="main-light-2" className={classes.lightTwo} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/3.png`} alt="main-light-3" className={classes.lightThree} />
      <Image draggable={false} src={`${import.meta.env.BASE_URL}assets/light/my-profile/1.png`} alt="light-3" className={classes.lightFour} />

      <Header />
      <Container>
        <Sidebar>
          <Flex className={classes.boxWrapper}>
            <DepositsBox height={804} />
            <WithdrawBox />
          </Flex>
        </Sidebar>
      </Container>
      <Footer />
    </Wrapper>
  );
}
