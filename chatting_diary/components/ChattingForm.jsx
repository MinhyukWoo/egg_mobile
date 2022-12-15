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
import React, { useRef, useState } from "react";

const ChattingForm = (props) => {
  const [message, setMessage] = useState("");

  const onChangeTextInput = (text) => setMessage(text);

  const onClickSendButton = () => {
    props.onSend(message);
    setMessage("");
  };
  return (
    <Flex direction="row" justify="space-between" align="stretch" m="1">
      <TextArea
        size="md"
        placeholder="채팅하세요."
        bgColor="amber.50"
        _focus={
          {borderColor: "amber.200"}
        }
        flex={1}
        value={message}
        onChangeText={onChangeTextInput}
      ></TextArea>
      <Button bgColor="amber.500" onPress={onClickSendButton}>
        전송
      </Button>
    </Flex>
  );
};

export default ChattingForm;
