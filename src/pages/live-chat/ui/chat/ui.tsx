import { ActionIcon, Avatar, Divider, Group, ScrollArea, Stack, Text, TextInput, rem } from "@mantine/core";
import clsx from "clsx";
import { useState } from "react";

import { Clip } from "@/shared/ui/icon/Clip";
import { ReadMessage } from "@/shared/ui/icon/ReadMessage";
import { SendIcon } from "@/shared/ui/icon/SendIcon";
import { UnreadMessage } from "@/shared/ui/icon/UnreadMessage";

import classes from "./styles.module.css";

const mokeChatHistory = [
  {
    id: 1,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    date: "2:59pm",
    role: "Admin",
    isOnline: true,
    isRead: true,
    messages: ["Hello Linh!", "I really love your work great job"],
  },
  {
    id: 3,
    img: `${import.meta.env.BASE_URL}assets/chat-avatar.png`,
    date: "4:04pm",
    role: "User",
    isOnline: false,
    isRead: false,
    messages: ["Hi Tom", "Thank you, I alos love it"],
  },
];

export const Chat = () => {
  const [activeChat] = useState<(typeof mokeChatHistory)[number] | null>(null);
  return (
    <Stack className={classes.pageContainer} gap={rem("64px")}>
      <Text className={classes.chatTitle}>Support</Text>
      <Group gap={32} className={classes.chatContainer}>
        <Stack gap={32} className={clsx(classes.chatWindow, classes.chatsWrapper)}>
          <Group gap={16}>
            <div className={classes.avatarWrapper}>
              <Avatar size={64} src={`${import.meta.env.BASE_URL}assets/support-avatar.png`} />
              {typeof activeChat?.isOnline === "boolean" && (
                <div className={clsx(classes.indicator, activeChat?.isOnline ? classes.online : classes.offline)} />
              )}
            </div>
            <Stack gap={4} h={"70%"}>
              <Text className={classes.chatSupportName}>Support</Text>
              <Text className={classes.online}>{activeChat?.isOnline && "Online"}</Text>
            </Stack>
          </Group>
          <Divider opacity={"0.12"} color={"white"} />
          <ScrollArea type="never" style={{ flex: 1 }}>
            <div className={classes.messagesWindow}>
              <p className={clsx(classes.message, classes.supportMessage)}>Hello Linh!</p>
              <p className={clsx(classes.message, classes.supportMessage)}>I really love your work great job 👌 </p>
              <Group className={classes.messageTimeWrapper} gap={4}>
                <ReadMessage />
                <Text className={classes.messageTimeText}>03:49PM</Text>
              </Group>
              <p className={clsx(classes.message, classes.userMessage)}>Hi Tom </p>
              <p className={clsx(classes.message, classes.userMessage)}>Thank you, I also love it</p>
              <Group className={classes.messageTimeWrapper} gap={4}>
                <UnreadMessage />
                <Text className={classes.messageTimeText}>03:55PM</Text>
              </Group>
            </div>
          </ScrollArea>
          <Group className={classes.inputMessageContainer} gap={16}>
            <Clip />
            <Divider orientation="vertical" color="white" opacity={0.12} />
            <TextInput className={classes.input} placeholder="Start a new message" />
            <ActionIcon className={classes.sendButton}>
              <SendIcon />
            </ActionIcon>
          </Group>
        </Stack>
      </Group>
    </Stack>
  );
};
