import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { ButtonExternal } from '../Button';
import { ArrowRight } from 'react-feather'
import { InView } from 'react-intersection-observer';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Wrapper = styled.div`
	max-width: 1464px;
  padding: 6.5rem 0 0;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  background-color: ${({ theme }) => theme.bg2};

  ${({ theme }) => theme.mediaWidth.upToExtraLarge`
    border-radius: 18px;
  `}
`

const Container = styled.div`
	margin-right: auto;
  margin-left: auto;
  max-width: 1280px;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-right: 1rem;
    padding-left: 1rem;
  `};


`

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`

const FlashAppsContainer = styled.div`
	width: 91.66667%;
	margin-left: 8.33333%;

	${({ theme }) => theme.mediaWidth.upToMedium`
    padding-top: 6.5rem;
    width: 83.33333%;
  `};
`

const TextLargeCenter = styled.div`
	position: relative;
	margin-bottom: 40px;
	z-index: 2;
	width: 100%;
  max-width: 54rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 55rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-bottom: 64px!important;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    max-width: 54rem;
    margin-right: auto!important;
    margin-left: auto!important;
    display: flex;
    align-items: center;
    flex-direction: column;
  `};
`

const MarketingHeader = styled.h2`
	color: ${({ theme }) => theme.white};
	margin-bottom: 16px;
	font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.025em;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 4rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    text-align: center;
  `};
`

const GradientText = styled.span`
	-webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -webkit-background-clip: text;
  background-image: linear-gradient(285.24deg, rgb(247, 203, 192) 0%, rgb(251, 234, 227) 17.81%, rgb(244, 177, 171) 29.8%, rgb(132, 118, 217) 49.78%, rgb(141, 180, 255) 69.77%);
`

const StyledButton = styled(ButtonExternal)`
  &:hover {
    color: inherit;
  }
`

const StyledArrow = styled(ArrowRight)`
  margin-right: -1.25rem;
  margin-left: 4px;
`

const InstructionsContainer = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
	padding-top: 32px;
`

const FirstInstruction = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 69vh;
	margin-top: 20vh;

	${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
  `};
`

const SecondInstruction = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 69vh;

	${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
  `};
`

const ThirdInstruction = styled.div`
	width: 100%;
	position: relative;
	height: 78vh;
  margin-bottom: 0;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
  `};
`

const InstructionHeader = styled.h3`
  font-family: var(--ifm-font-family-light);
	font-size: 1.25rem;
	font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.primary1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.1;
    max-width: 33.75rem;
  `};
`

const InstructionSubHeader = styled.span`
  color: ${({ theme }) => theme.text2};
`

const InstructionImageContainer = styled.div`
	width: 100%;
	position: absolute;
	height: 100%;
	padding: 18.75rem 0 0;
	top: 0;
	right: 0;
	pointer-events: none;
	padding-left: 0;
  padding-right: 0;
  overflow: unset;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
    padding: 18.75rem 0 10rem;
  `};
`

const StickyContainer = styled.div`
  position: sticky !important;
  top: 0 !important;
  right: 0 !important;
  z-index: 1 !important;
  padding-top: 16px;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-top: 64px!important;
  `};
`

const ImageWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
	overflow: hidden;
	min-height: 100vh;
  pointer-events: none;
  padding-left: 8px;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    height: 100vh;
    padding-top: 18vh;
    padding-bottom: 8vh;
    padding-left: 24px !important;
  `};
`

const FirstImage = styled.img<{inView: boolean}>`
	z-index: 2;
	max-width: none;
	position: relative;
  bottom: -60vh;
  width: 175%;
  border-radius: 6px;
  position: relative;
	opacity: 1;

	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 130%;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    bottom: auto;
    width: auto;
    height: 100%;
    max-height: 740px;
  `};

  ${({ inView }) =>
		inView
		? css`
				position: absolute;
    		opacity: 0;
			`
			: null}
`

const RestImage = styled.img<{inView: boolean}>`
	z-index: 2;
	max-width: none;
	position: relative;
  bottom: -60vh;
  width: 175%;
  border-radius: 6px;
  position: absolute;
  opacity: 0;

	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 130%;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    bottom: auto;
    width: auto;
    height: 100%;
    max-height: 740px;
  `};

  ${({ inView }) =>
		inView
		? css`
				position: relative;
    		opacity: 1;
			`
			: null}
`

export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0.01

export function FlashApps() {
	const [secondInView, setSecondInView] = useState<boolean>(false)
	const [thirdInView, setThirdInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

	return (
		<Wrapper>
			<Container>
				<FlexColumn>
					<FlashAppsContainer>
						<TextLargeCenter>
							<MarketingHeader>
								Introducing <GradientText>Flash Apps</GradientText>
							</MarketingHeader>
							<StyledButton href="/docs/03-smart-contracts/06-using-flash-apps">
								Read more about Flash Apps <StyledArrow size={18} />
							</StyledButton>
						</TextLargeCenter>
						<InstructionsContainer>
							<FirstInstruction>
								<InstructionHeader>
									One simple callback. Infinite experiences.&nbsp;
                  <InstructionSubHeader>
                    Execute entire programs as soon as a payment is made all within a single, atomic block. 
                  </InstructionSubHeader>
								</InstructionHeader>
							</FirstInstruction>
							<SecondInstruction>
								<InView as="div" {...options} onChange={(inView) => setSecondInView(!!inView)}>
									<InstructionHeader>
                    Contribute to the permisionless, open app store on the Ethereum network.&nbsp;
                    <InstructionSubHeader>
                      Whether you're selling NFTs, raising funds through an ICO or selling services online, Flash Apps 
                      allow you to focus on what matters. Give your customers a standardized payments experience.
                    </InstructionSubHeader>
                  </InstructionHeader>
								</InView>
							</SecondInstruction>
							<ThirdInstruction>
								<InView as="div" {...options} onChange={(inView) => setThirdInView(!!inView)}>
									<InstructionHeader>
                    Don't worry about complex rollbacks in case something goes wrong.&nbsp;
                    <InstructionSubHeader>
                      Atomicity means either the entire app executes, or funds are returned back to your customer. Simply 
                      revert execution at any step knowing that your customer will not be charged erroneously. 
                    </InstructionSubHeader>
                  </InstructionHeader>
								</InView>
							</ThirdInstruction>
							<InstructionImageContainer>
								<StickyContainer>
									<ImageWrapper>
										<FirstImage inView={(secondInView || thirdInView)} src={useBaseUrl('img/flash-app-1.png')} />
										<RestImage inView={secondInView} src={useBaseUrl('img/flash-app-2.png')} />
										<RestImage inView={thirdInView} src={useBaseUrl('img/flash-app-3.png')} />
									</ImageWrapper>
								</StickyContainer>
							</InstructionImageContainer>
						</InstructionsContainer>
					</FlashAppsContainer>
				</FlexColumn>
			</Container>
		</Wrapper>
	)
}