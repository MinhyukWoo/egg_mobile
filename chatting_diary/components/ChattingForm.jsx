import {
  Box,
  Button,
  Flex,
  Input,
  Spacer,
  Text,
  TextArea,
  View,
} from "native-base";
import React, { useState } from "react";

const ChattingForm = (props) => {
  const [message, setMessage] = useState("");

  const onChangeTextInput = (text) => setMessage(text);

  const onClickSendButton = () => {
    props.onSend(message);
    setMessage("");
  };

  return (
    <Flex direction="row" justify="space-evenly" m="1">
      <TextArea
        size="md"
        placeholder="채팅하세요."
        width="100%"
        value={message}
        onChangeText={onChangeTextInput}
      ></TextArea>
      <Spacer></Spacer>
      <Button onPress={onClickSendButton}>전송</Button>
    </Flex>
  );
};

export default ChattingForm;
