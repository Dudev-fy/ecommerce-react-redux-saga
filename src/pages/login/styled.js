import styled from 'styled-components';

import { breakpoints } from '../../config/breakpoints';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 70vh;
  height: 100%;
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 20px;
  padding: 20px;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 70%;
  }

  button {
    height: 35px;
    width: 25%;
    margin: 0 auto;
    margin-top: 5px;
    border: none;
    background-color: darkcyan;
    color: white;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);

    &:hover {
      background-color: blue;
    }

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      width: 45%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 45%;
    }
  }

  p {
    margin-top: 2px;
    margin-bottom: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  width: 100%;

  button {
    height: 35px;
    width: 50%;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 20px;
    border: none;
    background-color: yellow;
    font-size: 14px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
    color: black;

    &:hover {
      background-color: darkorange;
    }

    @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
      width: 60%;
    }

    @media (max-width: ${breakpoints.mobile}) {
      width: 60%;
    }
  }

  input {
    height: 25px;
    font-size: 16px;
    border: 1px solid darkgray;
    padding: 0 10px;
    border-radius: 5px;

    &:focus {
      border: 1px solid black;
    }
  }

  p {
    color: red;
    font-size: 13px;
    margin-bottom: 10px;
  }

  li {
    color: red;
    font-size: 13px;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${(props) => (props.isError ? '5px' : '15px')};
`;
