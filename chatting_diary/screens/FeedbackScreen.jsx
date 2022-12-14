import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  HStack,
  Image,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import ContentCardList from "../components/ContentCardList";
import TodoList from "../components/TodoList";
import EmotionPieChart from "../components/EmotionPieChart";
import InitFeedbackData from "../../assets/initFeedbackData.json";

const emotionInfos = [
  { emotion: "anger", color: "#ff0000", koreanNoun: "분노" },
  { emotion: "sadness", color: "#0000cd", koreanNoun: "슬픔" },
  { emotion: "anxiety", color: "#663399", koreanNoun: "불안" },
  { emotion: "hurt", color: "#8b0000", koreanNoun: "상처" },
  { emotion: "embarrassment", color: "#778899", koreanNoun: "당황" },
  { emotion: "happiness", color: "#ffd700", koreanNoun: "행복" },
  { emotion: "comfort", color: "#008000", koreanNoun: "편안" },
  { emotion: "joy", color: "#ffb6c1", koreanNoun: "기쁨" },
];

const FeedbackScreen = ({ route }) => {
  const { emotion, emotionProbability, videoContents, bookContents, todos } =
    route.params === undefined ? InitFeedbackData : route.params;
  return (
    <ScrollView px={4}>
      <VStack space={4} display="flex" w="100%">
        <HStack
          height={100}
          alignItems="center"
          justifyContent="space-around"
          mt={8}
          mx={2}
        >
          <Box
            px={12}
            h="100%"
            bg="yellow.100"
            rounded="xl"
            justifyContent="center"
          >
            <Text>
              {"오늘의 기분은 " +
                emotionInfos.find(
                  (emotionInfo) => emotionInfo.emotion === emotion
                ).koreanNoun}
            </Text>
          </Box>
          <Image
            flex={1}
            size="lg"
            resizeMode="center"
            source={require("../../assets/angry.png")}
          ></Image>
        </HStack>
        <Box>
          <EmotionPieChart data={emotionProbability}></EmotionPieChart>
        </Box>
        <Box>
          <TodoList todos={todos}></TodoList>
        </Box>
        {videoContents.length > 0 && (
          <Box>
            <Text fontSize="lg">오늘 추천하는 비디오 컨텐츠예요.</Text>
            <ContentCardList contents={videoContents}></ContentCardList>
          </Box>
        )}
        {bookContents.length > 0 && (
          <Box>
            <Text fontSize="lg">오늘 추천하는 도서 컨텐츠예요.</Text>
            <ContentCardList contents={bookContents}></ContentCardList>
          </Box>
        )}
      </VStack>
    </ScrollView>
  );
};

export default FeedbackScreen;
