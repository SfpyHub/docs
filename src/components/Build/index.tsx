import React, { useState, useContext } from 'react'
import styled, { ThemeContext, css, keyframes } from 'styled-components'
import { InView } from 'react-intersection-observer';
import { Text } from 'rebass'
import { MarketingDescription } from '../Body'
import { BuildTerminal } from '../Terminal/BuildTerminal'

const ListContainer = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	position: relative;
	padding-top: 7.5rem;
	padding-bottom: 64px;
	padding-left: 0;
  margin-bottom: 0;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-top: 7.5rem;
    padding-top: 128px;
  `}

	${({ theme }) => theme.mediaWidth.upToMedium`
    padding-top: 5.5rem;
    padding-bottom: 80px!important;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-top: 0;
    padding-bottom: 80px!important;
  `};
`

const FullWidthListItem = styled.li`
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 75%;
  `};

	${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `};  
`

const FlexColumnWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 24px;
  margin-bottom: 24px;
  margin-right: -1.5rem;
  margin-left: -1.5rem;

	${({ theme }) => theme.mediaWidth.upToLarge`
    flex-direction: row-reverse;
  `};
`

const AnimatedWrapper = styled.div`
	width: 100%;

	
`

const AnimatedTextWrapper = styled.div<{inView: boolean}>`
	width: 100%;
	padding-top: 44px;
  padding-bottom: 32px;
  opacity: 0;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(-15px);
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  

  ${({ inView }) => 
  	inView 
  	? css`
        opacity: 1;
    		transform: translateX(0);
      `
      : null}
`

const MarketingHeader = styled(Text)`
  font-family: var(--ifm-font-family-heavy);
	word-wrap: break-word;
	line-height: .96;
  letter-spacing: -.025em !important;
  font-size: 2.2rem;
  font-weight: 800!important;
  line-height: 1;
  margin-bottom: 16px !important;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 3rem;
  `};
`

const TerminalWrapper = styled.div`
	width: 100%;
  min-height: 300px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  
`

export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0.01

export function Build() {
  const theme = useContext(ThemeContext)
	const [isInView, setInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

  return (
  	<ListContainer>
  		<FullWidthListItem>
  			<FlexColumnWrapper>
	  			<InView as={AnimatedWrapper} {...options} onChange={(inView, entry) => setInView(!!inView)}>
	  				<AnimatedTextWrapper inView={isInView}>
	  					<MarketingHeader>
	  						Build on the future of money
	  					</MarketingHeader>
	  					<MarketingDescription>
	  						<span style={{color: theme.primary1, fontWeight: 600}}>
                  Do more with less code by integrating the open SFPY API.&nbsp;
								</span>
                Easily create unique payment experiences, connect with millions of 
                customers on the decentralized web and take advantage of 
                the security of a shared, trustable and accessible ledger.
	  					</MarketingDescription>
	  				</AnimatedTextWrapper>
	  			</InView>
          <TerminalWrapper>
            {isInView && (
              <BuildTerminal />
            )}
          </TerminalWrapper>
	  		</FlexColumnWrapper>
  		</FullWidthListItem>
  	</ListContainer>
  )
}
