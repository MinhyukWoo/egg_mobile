import { Box, Button, KeyboardAvoidingView, View } from "native-base";
import React, { useEffect, useState } from "react";
import ChattingForm from "../components/ChattingForm";
import ChattingLog from "../components/ChattingLog";

const ChattingScreen = ({ navigation }) => {
  const [chattings, setChattings] = useState([]);

  const [computerQuestions, setComputerQuestions] = useState([
    { key: 1, sender: "먼지", message: "오늘 어떤 일이 있었어?" },
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

  const computerSend = () => {
    if (computerQuestions.length > 0) {
      setChattings((state) => [...state, computerQuestions[0]]);
      setComputerQuestions((state) => state.slice(1));
    } else {
      setChattings((state) => [
        ...state,
        { key: 0, sender: "먼지", message: "피드백 페이지로 이동하세요." },
      ]);
      setIsChattingDone(true);
    }
  };

  const userSend = (message) => {
    if (!isChattingDone) {
      setChattings((state) => [
        ...state,
        { key: chatNum, sender: "나", message },
      ]);
      setChatNum((state) => state + 1);
      computerSend();
    }
  };

  useEffect(() => {
    computerSend();
  }, []);

  return (
    <View pt={4} px={4}>
      <ChattingLog chattings={chattings}></ChattingLog>
      {isChattingDone && (
        <Button
          onPress={() => {
            navigation.navigate("피드백");
          }}
        >
          피드백 페이지로 이동
        </Button>
      )}
      <KeyboardAvoidingView>
        <ChattingForm onSend={userSend}></ChattingForm>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChattingScreen;
