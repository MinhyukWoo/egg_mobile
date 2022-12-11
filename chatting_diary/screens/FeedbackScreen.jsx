import React, { useEffect, useState } from "react";
import { Box, ScrollView, Text, View } from "native-base";
import ContentCardList from "../components/ContentCardList";
import TodoList from "../components/TodoList";
import axios from "axios";

const FeedbackScreen = () => {
  const [videoContents, setVideoContents] = useState([
    {
      key: 0,
      title: "시험 불안을 극복하고 스트레스 없이 시험에 응시하는 방법",
      description:
        "시험은 불필요한 스트레스를 많이 유발할 수 있지만 여러 가지 방법으로 스트레스를 줄일 수 있습니다. 이 비디오에서 우리는 시험 불안을 야기하는 학생으로서 직면 ...",
      link: "https://requestletters.com/ko/how-to-beat-test-anxiety-and-take-on-exams-without-stress-video",
      thumbnail: null,
    },
    {
      key: 1,
      title: "[※시험불안] 긴장 2분 만에 없애는 방법 (수능 당일 성적 올리기)",
      description:
        "공부 방법이 고민이신 분들은 학습진단을 무료로 해드립니다. ▷ https://bit.ly/2JH0yM7 공신들의 공부비법을 모두 담은 시크릿 노하우, ...",
      link: "https://m.youtube.com/watch?v=Npi3wUhhPHo",
      thumbnail: "https://img.youtube.com/vi/Npi3wUhhPHo/0.jpg",
    },
    {
      key: 2,
      title: "시험스트레스극복방법,공부잘하는방법,시험불안해소방법 ...",
      description:
        "다운로드센터는 마음의건강과 부정의 기억을 처리하는 삶의 콘텐츠, 증상에 따른 콘텐츠, 명상호흡콘텐츠 등 각박한 삶에 마음의 여유와 넉넉한 마음 ...",
      link: "https://www.youtube.com/watch?v=SKEqdjuJDtE",
      thumbnail: "https://img.youtube.com/vi/SKEqdjuJDtE/0.jpg",
    },
    {
      key: 3,
      title: "학습최면동영상- 시험공포증 스트레스 극복하는 최면거는방법",
      description:
        "시험이라는 것은 부담을 갖으면서 공포증이 되어간다. 아무래도 청소년이나 고3수험생 같은 경우에는 시험만 생각해도 이미 마음이 불안하고 심장이 ...",
      link: "https://www.youtube.com/watch?v=515my-Fi6Gc",
      thumbnail: "https://img.youtube.com/vi/515my-Fi6Gc/0.jpg",
    },
    {
      key: 4,
      title: "수능 면접 발표 전 10초만에 긴장 푸는 법! 떨릴 때 호흡법 ft ...",
      description:
        "떨릴 때 호흡법 ft. 울렁증 스트레스 극복 ... 면접 & 시험 앞두고 필수! ... 간단한 비법으로 10초 만에 스트레스와 긴장, 잠재우기를 바랍니다.",
      link: "http://parkmikyeong.com/3271?cat=118",
      thumbnail: null,
    },
  ]);
  useEffect(() => {
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/result/api",
      data: { name: "minhyuk4", feeling: "happy" },
    })
      .then((response) => {
        setVideoContents(() => response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ScrollView px={4}>
      <Box
        p={12}
        my={6}
        mx={2}
        bg="yellow.200"
        rounded="xl"
        alignSelf="center"
        _text={{ fontSize: "lg" }}
      >
        오늘의 기분은 기쁘군요.
      </Box>
      <Text fontSize="lg">오늘 추천하는 컨텐츠에요.</Text>
      <ContentCardList contents={videoContents}></ContentCardList>
      <Box py={4}>
        <TodoList></TodoList>
      </Box>
      <Box mb={8}></Box>
    </ScrollView>
  );
};

export default FeedbackScreen;
