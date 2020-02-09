import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { fadeIn } from 'react-animations';
import menu from '../../../static/images/menu.svg';

const fadeInAnimation = keyframes`${fadeIn}`;

export const FadeIn = styled.div`
  animation: 1.1s ${fadeInAnimation};
`;

export const ContainerMenu = styled.aside`
    width: 20%;
    height: calc(100vh - 195px);
    background-color: #282C35;
    border-right: 2px solid #FF9900;
    padding-top: 10px;
    overflow: auto;
    height: 100vh;

    ::-webkit-scrollbar {
      padding: 10px 0;
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgb(40, 44, 53);
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(255, 153, 0);;
      border-radius: 20px;
    }

    & a {
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        letter-spacing: 0.1em;
        text-decoration: none;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      position: absolute;
      width: 100%;
      height: 100vh;
      background-color: #282C35;
      border-right: 2px solid #FF9900;
      padding-top: 50px;
      padding-bottom: 20px;
      overflow: auto;
    }
`;

export const ContentMenu = styled.div`
  width: 0;
  margin: 0 auto;
`;

export const Hamburger = styled.div`
    background: rgb(40, 44, 53) url(${menu}) no-repeat;
    background-size: 32px 57px;
    background-position: 10px top;
    width: 56px;
    height: 50px;
    margin-bottom: 2px;
    padding: 3px 0px;
    cursor: pointer;
  
    @media (max-width: 768px) {
      width: 54px;
    }
`;

export const ContainerHamburguer = styled.header`
    width: 56px;
    border-right: 2px solid rgba(255, 255, 255, 0.28);

    @media (max-width: 768px) {
      width: 54px;
      position: static;
    }
`;

export const ContainerLink = styled.div`
    display: flex;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const ContainerContent = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
`;


export const StyledLink = styled(props => <Link {...props} getProps={({ isCurrent }) => {
  return {
    style: {
      color: isCurrent ? '#ff9900' : ''
    }
  };
}}
/>)`
  color: #FFFFFF;
  text-decoration: none;  
  white-space: nowrap;
  &:hover {
    color: #FF9900;
  }
`;

export const Title = styled.p`
    display: flex;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    font-size: 18px;
    color: #FF9900;
    text-align: center;
    padding-bottom: 20px;
`;

export const CloseButton = styled.span`
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      right: 20px;
      top: 20px;
      width: 20px;
      height: 20px;
      opacity: 0.3;
      background-color: #FFF;
    }

    &:hover {
      opacity: 1;
    }

    &:before, &:after {
      position: absolute;
      left: 9px;
      content: ' ';
      height: 20px;
      width: 2px;
      background-color: #333;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

`;

export const ToggleButton = styled.div`
    position: absolute;
    width: 24px;
    height: 31px;
    background-color: #ff9900;
    left: 16.85%;
    margin-top: 10px;
    cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    margin-top: 7px;
    width: 6px;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid #282c35;
  }
`;
