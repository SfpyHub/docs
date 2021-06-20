import React from 'react'
import styled from 'styled-components'
import Link from '@docusaurus/Link';

export const Wrapper = styled.footer`
  max-width: 1464px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  color: ${({ theme }) => theme.text1};
  padding: 1.5rem;
  flex-direction: column;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 2rem 1.5rem;
    flex-direction: row;
    justify-content: space-between;
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 2rem 3rem;
  `}

  ${({ theme }) => theme.mediaWidth.upToExtraLarge`
    padding: 2rem 0rem;
  `}
`

export const Brand = styled.p`
  font-family: var(--ifm-font-family-heavy);
  font-weight: 600;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.text1};
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0;
  margin: 0px;
  margin-top: 1.5rem;
  list-style-type: none;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    flex-direction: row;
    align-items: center;
    margin-top: 0;
  `}

`

export const StyledLink = styled(Link)`
  margin: 0;
  color: ${({ theme }) => theme.text1};
  margin-right: 12px;
  text-decoration: none;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-right: 12px;
  `}

  :hover {
    color: ${({ theme }) => theme.primary1};
    text-decoration: none;
  }
`

export function Footer() {
  return (
    <Wrapper>
      <Brand>
        © 2021 SFPY
      </Brand>
      <List>
        <StyledLink to="/docs/07-legal/01-disclaimer">
          Disclaimer
        </StyledLink>
        <StyledLink to="/docs/07-legal/03-terms">
          Terms and Conditions
        </StyledLink>
      </List>
    </Wrapper>
  )
}



