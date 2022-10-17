import React from "react";
import Heading from "../components/Headings/Heading";
import MainMenuModalContent from "../components/Modal/MainMenuModalContent";
import Modals from "../components/Modal/Modals";
import Nav from "../components/Navigation/Nav";
import Action from "../components/Buttons/Action";
import '../assets/css/Shop.css';
import '../assets/css/Nav.css';
import styled from "styled-components";

const ComingSoon = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20vw;
  color: #2c9;
  line-height: 16vw;
`;

function Shop() {
  return (
    <div id="shop">
      <Modals modalContent={<MainMenuModalContent />} />
      <Heading h="h3" title="Shop" />
      <div id="navbar">
        <Nav />
      </div>
      <ComingSoon>COMING SOON!</ComingSoon>
    </div>
  );
}

export default Shop;
