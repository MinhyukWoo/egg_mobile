import React from "react";
import { Box, ScrollView, Text, View } from "native-base";
import ContentCard from "../components/ContentCard";
import ContentCardList from "../components/ContentCardList";
import TodoList from "../components/TodoList";

const FeedbackScreen = () => {
  return (
    <ScrollView pt={4} px={4}>
      <Box
        p={12}
        m={2}
        bg="yellow.200"
        rounded="xl"
        alignSelf="center"
        _text={{ fontSize: "lg" }}
      >
        오늘의 기분은 기쁘군요.
      </Box>
      <Text fontSize="lg">추천 컨텐츠</Text>
      <ContentCardList></ContentCardList>
      <Box py={4}>
        <TodoList></TodoList>
      </Box>
    </ScrollView>
  );
};

export default FeedbackScreen;
