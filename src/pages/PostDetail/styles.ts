import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostDetailContainer = styled.div`
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

export const PostDetailCardContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: auto;
  background-color: ${props => props.theme['base-profile']};
  padding: 2rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      background-color: transparent;
      color: ${props => props.theme['blue']};
      transition: border 0.2s;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      gap: .5rem;
      text-transform: uppercase;

      font-weight: 700;
      font-size: .75rem;
      line-height: 160%;

      &:hover {
        border-bottom: 2px solid ${props => props.theme['blue']};
      }
    }
  }

  div {
    margin-top: 1.5rem;
  }

  footer {
    margin-top: .5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      gap: .5rem;
      color: ${props => props.theme['base-subtitle']};

      svg {
        color: ${props => props.theme['base-label']};
      }
    }
  }

  @media (max-width: 500px) {
    div {
      h1 {
        text-align: center;
      }
    }

    footer {
      flex-direction: column;
    }
  }
`;

export const ButtonLink = styled(NavLink)`
  text-decoration: none;
  background-color: transparent;
  color: ${props => props.theme['blue']};
  transition: border 0.2s;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: .5rem;
  text-transform: uppercase;

  font-weight: 700;
  font-size: .75rem;
  line-height: 160%;

  &:hover {
    border-bottom: 2px solid ${props => props.theme['blue']};
  }
`;

export const PostDetailContent = styled.main`
  max-width: 864px;
  width: 100%;
  padding: 2.5rem;
  white-space: pre-wrap;
  overflow: hidden;

  div {
    overflow-x: auto;
    width: 100%;
    height: 100%;
  }
`;