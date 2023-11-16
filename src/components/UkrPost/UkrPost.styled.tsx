import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 32.8rem;
  min-height: 26.7rem;
  padding: 1.6rem 3.1rem 2rem 2.1rem;
  border: 1px solid #c1baba;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 5.1rem;
    width: 70.4rem;
    min-height: 47.8rem;
    padding: 5.2rem 11.1rem 5.1rem 11.1rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[2]}) {
    gap: 4.6rem;
    width: 63rem;
    min-height: 47.8rem;
    padding: 5.2rem 7.4rem 5.1rem 7.4rem;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 21.3rem;
  height: 5.7rem;
  align-self: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    width: 32.5rem;
    height: 8.7rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 3.4rem;
  } 
`;

export const ListItem = styled.li`
  display: flex;
  gap: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    gap: 1.2rem;
    align-items: center;
  }
`;

export const Text = styled.p`
  color: #5a5757;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 1.8rem;
    letter-spacing: -0.1px;
  }
`;
