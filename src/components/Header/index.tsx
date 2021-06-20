import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'

import { RowFixed } from '../Row'

const HeaderFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  background: ${({ theme }) => theme.bg1};
  padding: 1rem;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    padding: 0.5rem 1rem;
  `}
`

const HeaderRow = styled(RowFixed)`
	max-width: 1280px;
	padding: 0 1.5rem;
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const Title = styled(Text)`
	font-size: 3rem;
  letter-spacing: 10px;
  font-family: var(--ifm-font-family-header);
	color: ${({ theme }) => theme.text1};
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

export function Header() {

  return (
    <HeaderFrame>
      <HeaderRow>
        <Title href="." style={{}}>
          SFPY
        </Title>
      </HeaderRow>
    </HeaderFrame>
  )
}