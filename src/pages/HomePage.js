import React from "react";

// router
import { Link } from "react-router-dom";

// styled
import styled from "styled-components";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCompass,
  faQuestion,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

// data
import { TopicData } from "../data/TopicData";

// components
import TopicCard from "../components/TopicCard";
import Header from "../components/Header";

// utils
import { Colors } from "../utils/style/Colors";

export default function HomePage() {
  return (
    <StyledHomePage>
      <Header />
      <Main>
        <Sidebar>
          <SidebarTitle>Menu</SidebarTitle>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuLink data-active={true} to="#">
                <SidebarMenuLinkIcon>
                  <SidebarMenuIconLink icon={faHome} />
                </SidebarMenuLinkIcon>
                Home
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink to="#">
                <SidebarMenuLinkIcon>
                  <SidebarMenuIconLink icon={faCompass} />
                </SidebarMenuLinkIcon>
                Explore Topics
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink to="#">
                <SidebarMenuLinkIcon>
                  <SidebarMenuIconLink icon={faQuestion} />
                </SidebarMenuLinkIcon>
                My Topics
              </SidebarMenuLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuLink to="#">
                <SidebarMenuLinkIcon>
                  <SidebarMenuIconLink icon={faComment} />
                </SidebarMenuLinkIcon>
                My Answers
              </SidebarMenuLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </Sidebar>
        <Topics>
          {TopicData.map((topic) => {
            return <TopicCard key={topic.id} data={topic} />;
          })}
        </Topics>
        <Right>
          <ButtonLink to="#">
            <ButtonLinkIcon icon={faAdd} />
            Start a New Topic
          </ButtonLink>
        </Right>
      </Main>
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div``;
const Main = styled.main`
  padding: 20px;

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding: 50px;
  }
`;
const Sidebar = styled.aside``;
const SidebarTitle = styled.p`
  text-transform: uppercase;
  color: #a2a2a2;
  font-size: 13px;
  font-weight: 500;
`;
const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const SidebarMenuItem = styled.li``;
const SidebarMenuLinkIcon = styled.div`
  width: 15px;
  margin: 0 10px 0 0;
`;
const SidebarMenuIconLink = styled(FontAwesomeIcon)`
  width: 15px;
`;
const SidebarMenuLink = styled(Link)`
  &[data-active="true"] {
    color: ${Colors.primary};
    font-weight: 500;
    border-left: 6px solid ${Colors.primary};
    background-color: rgba(72, 69, 210, 0.3);
  }
  border-left: 6px solid transparent;
  padding: 5px 10px;
  display: flex;
  text-decoration: none;
  color: #a2a2a2;
`;
const Topics = styled.section`
  display: grid;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    width: 65%;
  }
`;
const Right = styled.aside``;
const ButtonLinkIcon = styled(FontAwesomeIcon)`
  margin: 0 5px 0 0;
`;
const ButtonLink = styled(Link)`
  background-color: ${Colors.primary};
  color: white;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  padding: 10px 20px;
  margin: 20px 0 0 0;
  display: block;
  text-decoration: none;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`;
