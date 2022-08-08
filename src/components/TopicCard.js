import React from "react";

// styled
import styled from "styled-components";

// utils
import { Colors } from "../utils/style/Colors";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function TopicCard({ data }) {
  return (
    <StyledTopicCard>
      <TopicCardUseful>
        <TopicCardUsefulArrow icon={faArrowUp} />
        <TopicCardUsefulCount>
            {data.likes}
        </TopicCardUsefulCount>
        <TopicCardUsefulArrow icon={faArrowDown} />
      </TopicCardUseful>
      <TopicCardTitle>{data.title}</TopicCardTitle>
      <TopicCardDescription>{data.description}</TopicCardDescription>
      <TopicCardAuthor>
        <TopicCardAuthorWrapper>
          <TopicCardAuthorAvatar
            src={`${data.author.avatar}`}
            alt={`Photo de profil de ${data.author.displayName}`}
          />
          <TopicCardAuthorName>
            Posted by{" "}
            <TopicCardAuthorNameSpan>
              {data.author.displayName}
            </TopicCardAuthorNameSpan>
          </TopicCardAuthorName>
        </TopicCardAuthorWrapper>
      </TopicCardAuthor>
    </StyledTopicCard>
  );
}

const StyledTopicCard = styled.div`
  box-shadow: 10px 10px 30px rgb(0 0 0 / 7%);
  padding: 20px;
  border-radius: 10px;
  background-color: white;
`;
const TopicCardTitle = styled.h3``;
const TopicCardDescription = styled.p``;
const TopicCardUseful = styled.div`
display:flex;
flex-direction:column;
width:max-content;
`;
const TopicCardUsefulCount = styled.p`
font-weight:600;
margin:5px 0;
color: darkgray;
`;
const TopicCardUsefulArrow = styled(FontAwesomeIcon)`
color: darkgray;
`;
const TopicCardAuthor = styled.div`
  padding: 20px 0 0 0;
  border-top: 1px solid darkgray;
`;
const TopicCardAuthorAvatar = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 100px;
  width: 35px;
  height: 35px;
`;
const TopicCardAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const TopicCardAuthorName = styled.p`
  color: darkgray;
  margin: 0;
`;
const TopicCardAuthorNameSpan = styled.span`
  color: ${Colors.primary};
`;
