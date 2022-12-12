import { Box, Flex, ScrollView } from "native-base";
import React, { useRef, useState } from "react";
import { Text, View } from "react-native";
import ChattingIcon from "./ChattingIcon";

const ChattingLog = (props) => {
  const scrollView = useRef();
  return (
    <ScrollView
      ref={scrollView}
      onContentSizeChange={() => {
        return scrollView.current.scrollToEnd({ animated: true });
      }}
    >
      {props.chattings.map((chatting) => {
        return (
          <Box key={chatting.key} pb={5}>
            {chatting.sender === "먼지" ? (
              <Flex direction="row">
                <ChattingIcon></ChattingIcon>
                <Box
                  ml={2}
                  rounded="sm"
                  bg="tertiary.50"
                  alignSelf="center"
                  p={2}
                >
                  {chatting.message}
                </Box>
              </Flex>
            ) : (
              <Flex direction="row" justifyContent="flex-end">
                <Box
                  ml={2}
                  rounded="sm"
                  bg="tertiary.100"
                  alignSelf="center"
                  p={2}
                >
                  {chatting.message}
                </Box>
              </Flex>
            )}
          </Box>
        );
      })}
    </ScrollView>
  );
};

export default ChattingLog;
