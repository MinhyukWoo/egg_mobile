import { ScrollView } from "native-base";
import React from "react";
import ContentCard from "./ContentCard";

const ContentCardList = () => {
  return (
    <ScrollView horizontal={true}>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
      <ContentCard></ContentCard>
    </ScrollView>
  );
};

export default ContentCardList;
