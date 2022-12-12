import { Box, Text } from "native-base";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TodoList = ({ todos, setTodos }) => {
  return (
    <Box
      width="100%"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box alignItems="flex-start" p={5}>
        <Text pb={4} fontSize="lg" fontWeight="medium">
          이런 활동도 해보세요.
        </Text>
        <Box>
          {todos.map((todo) => {
            return (
              <Box pb={3} key={todo.key}>
                <BouncyCheckbox
                  fillColor="green"
                  text={todo.task}
                  isChecked={false}
                  onPress={(isChecked) => {
                    setTodos((state) => {
                      state[todo.key].isDone = isChecked;
                      return state;
                    });
                  }}
                ></BouncyCheckbox>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default TodoList;
