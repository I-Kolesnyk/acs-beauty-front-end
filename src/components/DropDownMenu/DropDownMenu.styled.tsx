import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { INavItemProps } from "@/types/components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  border: none;
  background-color: transparent;
`;

export const DropDownList = styled.ul`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: space-between;
    row-gap: 5.4rem;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    padding: 3.6rem 8rem;
    font-size: 2.4rem;
    letter-spacing: 0.72px;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    background-color: ${({ theme }) => theme.colors.grey[500]};
    width: 100%;
    max-width: 144rem;
    padding-left: 8rem;
    padding-right: 8rem;
    height: 43rem;
  }
`;

const navItemStyles = ({ theme, isActive }: INavItemProps) => css`
  display: flex;
  align-items: center;
  background-color: ${isActive
    ? `${theme.colors.grey[500]}`
    : `${theme.colors.white[100]}`};
`;

export const NavItem = styled.li<{ isActive: boolean }>`
  ${navItemStyles}
`;

export const SubMenuItem = styled.li`
  width: calc(100% / 3);
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: font-weight 250ms ease-out;
  &:hover,
  &:focus {
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  }
`;
