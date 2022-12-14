import { Box, Button, KeyboardAvoidingView, Spinner, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import ChattingForm from "../components/ChattingForm";
import ChattingLog from "../components/ChattingLog";
import { useHeaderHeight } from "@react-navigation/elements";
import axios from "axios";

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

const ChattingScreen = ({ navigation }) => {
  const [chattings, setChattings] = useState([
    { key: 1, sender: "먼지", message: "오늘 어떤 일이 있었어?" },
  ]);

  const [computerQuestions, setComputerQuestions] = useState([
    { key: 2, sender: "먼지", message: "그 때 어떤 생각/기분이 들었어?" },
    {
      key: 3,
      sender: "먼지",
      message:
        "다시 돌아간다면 어떻게 할 것 같아?\n그렇게 생각하는 이유는 뭐야?",
    },
  ]);

  const [chatNum, setChatNum] = useState(10);
  const [isChattingDone, setIsChattingDone] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const computerSend = () => {
    setTimeout(() => {
      if (computerQuestions.length > 0) {
        setChattings((state) => [...state, computerQuestions[0]]);
        setComputerQuestions((state) => state.slice(1));
      } else {
        setChattings((state) => [
          ...state,
          {
            key: 0,
            sender: "먼지",
            message: "피드백 페이지로 이동하세요.",
          },
        ]);
        setIsChattingDone(true);
      }
    }, 1000);
  };

  const userSend = (message) => {
    if (!isChattingDone && chattings[chattings.length - 1].sender === "먼지") {
      setChattings((state) => [
        ...state,
        { key: chatNum, sender: "나", message },
      ]);
      setChatNum((state) => state + 1);
      computerSend();
    }
  };
  const height = useHeaderHeight();
  const onNavigateButtonClick = () => {
    setIsSending(() => true);
    axios({
      method: "post",
      url: "http://ubless607.pythonanywhere.com/result/api",
      data: { name: "minhyuk4", feeling: chattings[1].message },
    })
      .then((response) => {
        return {
          emotion: response.data.emotion,
          emotionProbability: response.data.emotions.map(
            ({ emotion, probability }) => {
              const { color, koreanNoun } = emotionInfos.find(
                (emotionInfo) => emotionInfo.emotion === emotion
              );
              return {
                name: koreanNoun,
                population: probability,
                color,
              };
            }
          ),
          videoContents: response.data.videos.map((video, index) => {
            return {
              key: index,
              ...video,
            };
          }),
          bookContents: response.data.books.map((book, index) => {
            return {
              key: index,
              ...book,
            };
          }),
          todos: response.data.todos.map(({ task }, index) => {
            return {
              key: index,
              task,
              isDone: false,
            };
          }),
        };
      })
      .then((jsonData) => {
        navigation.navigate("Feedback", jsonData);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsSending(() => false);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? height : null}
      flex={1}
      justifyContent="space-between"
      m={2}
    >
      <Box flex={1}>
        <ChattingLog chattings={chattings}></ChattingLog>
      </Box>

      <Box>
        {isChattingDone && (
          <Button
            bgColor="amber.500"
            isLoading={isSending}
            onPress={onNavigateButtonClick}
          >
            피드백 페이지로 이동
          </Button>
        )}
        <ChattingForm onSend={userSend}></ChattingForm>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default ChattingScreen;
