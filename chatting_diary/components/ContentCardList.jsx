import { Box, ScrollView } from "native-base";
import React from "react";
import ContentCard from "./ContentCard";

const ContentCardList = ({ contents }) => {
  return (
    <ScrollView horizontal={true}>
      {contents.map(({ key, description, title, link, thumbnail }) => {
        return (
          <Box mx={1} key={key}>
            <ContentCard
              description={description}
              title={title}
              link={link}
              thumbnail={thumbnail}
            ></ContentCard>
          </Box>
        );
      })}
    </ScrollView>
  );
};

export default ContentCardList;
