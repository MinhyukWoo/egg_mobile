import { Box, Text } from "native-base";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { key: 0, task: "1km 산책하기", isDone: false },
    { key: 1, task: "30분 명상하기", isDone: false },
    { key: 2, task: "8시간 이상 잠자기", isDone: false },
  ]);
  return (
    <Box
      maxW="80"
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
          {tasks.map((task) => {
            return (
              <Box pb={3} key={task.key}>
                <BouncyCheckbox
                  fillColor="green"
                  text={task.task}
                  isChecked={task.isDone}
                  onPress={(isChecked) => {
                    setTasks((state) => {
                      state[task.key].isDone = isChecked;
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
