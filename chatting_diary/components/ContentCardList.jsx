import { Box, ScrollView } from "native-base";
import React from "react";
import ContentCard from "./ContentCard";

const ContentCardList = () => {
  return (
    <ScrollView horizontal={true}>
      <Box mx={1}>
        <ContentCard></ContentCard>
      </Box>
      <Box mx={1}>
        <ContentCard></ContentCard>
      </Box>
      <Box mx={1}>
        <ContentCard></ContentCard>
      </Box>
    </ScrollView>
  );
};

export default ContentCardList;
