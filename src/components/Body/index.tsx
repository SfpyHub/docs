import React, { useState, useContext } from 'react'
import styled, { css, keyframes, ThemeContext } from 'styled-components'
import { Text } from 'rebass'
import { ArrowRight } from 'react-feather'
import { InView } from 'react-intersection-observer';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Row from '../Row'
import { ButtonExternal } from '../Button';
import { Creator } from '../Create'
import { Build } from '../Build'
 
const RelativeDiv = styled.div`
	position: relative;
`

const OverflowHidden = styled.div`
	overflow: hidden;
`

const AbsoluteDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
`
const Container = styled.div`
  background-color: ${({ theme }) => theme.bg2};
	max-width: 1464px;
	padding: 6.5rem 0 0;
	z-index: 2;
	margin: 0 auto;
	position: relative;

  ${({ theme }) => theme.mediaWidth.upToExtraLarge`
    border-radius: 18px;
  `}
`

const Wrapper = styled.div`
	padding-right: 1rem;
  padding-left: 1rem;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-right: 1rem;
    padding-left: 1rem;
  `};
`

const GutterFluid = styled(Row)`
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  width: unset;
  flex-direction: column;
`

const FeatureColumnLeft = styled.div`
  padding-right: 1.5rem!important;
  padding-left: 1.5rem!important;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 83.333%;
    margin-left: 8.3333%;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
  	width: 83.333%;
  `};
`

const FeatureColumnOffset = styled(FeatureColumnLeft)`
	
`

const FeatureColumnOffsetLarge = styled(FeatureColumnLeft)`
  margin-left: 8.33333%!important;
  max-width: none !important;
`

const FeatureColumnTitle = styled.div`
	width: 100%;
	max-width: 40.5rem;

	${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 41.25rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    max-width: 40.5rem;
  `};
`

export const MarketingHeader = styled(Text)`
  font-family: var(--ifm-font-family-heavy);
	word-wrap: break-word;
	line-height: .96;
  letter-spacing: -.025em !important;
  font-size: 2.5rem;
  font-weight: 800!important;
  line-height: 1;
  margin-bottom: 40px !important;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 4rem !important;
    margin-bottom: 64px !important;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    max-width: 40.5rem;
  `};
`

export const MarketingDescription = styled(Text)`
	font-weight: 500;
  line-height: 1.25;
  font-size: 1.25rem;
  font-family: var(--ifm-font-family-light);
  color: ${({ theme }) => theme.text2};
  
  margin-bottom: 16px !important;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 1.5rem!important;
    font-weight: 600;
  `};
`

const ItemList = styled.ul<{dark?: boolean}>`
	display: flex;
	flex-direction: column;
	position: relative;
	padding-bottom: 0px;
	list-style: none;
	margin-left: 1.5rem;
  padding-left: 0;
  margin-bottom: 0;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: -1.5rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: -1.5rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-left: -1.5rem;
  `};
`

const ItemDescription = styled.li`
	padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 24px;
  margin-top: -16px;
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 75%;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
  `};
`

const StyledAnnouncementButton = styled(ButtonExternal)`
	color: ${({ theme }) => theme.primary1};
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`

const FullWidth = styled.div`
	position: relative;
	width: 100%;
	padding-right: 1.5rem;
  padding-left: 1.5rem;
`

const HomeNoCodeContainer = styled.div<{dark?: boolean}>`
	padding-top: 16px!important;
  padding-bottom: 16px!important;
  position: relative;
`

const AnimationWrapper = styled.div<{inView: boolean}>`
	z-index: 2;
	position: relative;
	transition: opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);
  transform: scale(.96) translateY(24px);
  opacity: 0;
  ${({ inView }) => 
  	inView 
  	? css`
        opacity: 1;
    		transform: scale(1) translateY(0);
      `
      : null}

  
`

const flyin = keyframes`
  from {
      opacity: 0;
      transform: scale3d(1.05,1.05,1) translateY(4%);
  }

  to {
      opacity: 1;
      transform: scaleX(1) translateY(0);
  }
`

const HomeNoCodeBrowserContainer = styled.div<{inView: boolean}>`
	z-index: 2;
	visibility: hidden;
	position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
	${({ inView }) =>
		inView
		? css`
				visibility: visible !important;
  			animation: ${flyin} .7s ease 4s both;
			`
			: null}
`

const StyledImg = styled.img`
  max-width: 125%;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 100%;
  `};
`

const StyledArrow = styled(ArrowRight)`
  margin-right: -1.25rem;
  margin-left: 4px;
`

export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0.01

export function Body() {
  const { siteConfig } = useDocusaurusContext()
  const { customFields } = siteConfig
  const imgUrl = useBaseUrl('img/pay-demo.png');
  const theme = useContext(ThemeContext)
	const [isInView, setInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

	return (
		<RelativeDiv>
			<OverflowHidden>
				<Container>
					<Wrapper>
						<GutterFluid>
							<FeatureColumnLeft>
								<FeatureColumnTitle>
									<MarketingHeader>
										Upgrade your payments with the easiest way to get paid 
                    in crypto
									</MarketingHeader>
								</FeatureColumnTitle>
							</FeatureColumnLeft>
							<FeatureColumnOffset>
								<ItemList>
									<ItemDescription>
										<MarketingDescription>
											Create requests denominated in USD and get paid in any compatible digital currency.&nbsp;
											<span style={{color: theme.primary1, fontWeight: 600}}>
												Do it all for free without any code using the app
											</span>
										</MarketingDescription>
										<StyledAnnouncementButton href={`${customFields.appUrl}/#/signup`}>
											Get started today
											<StyledArrow size={18} />
										</StyledAnnouncementButton>
									</ItemDescription>
								</ItemList>
							</FeatureColumnOffset>
							<FullWidth>
								<HomeNoCodeContainer>
									<InView as="div" {...options} onChange={(inView, entry) => setInView(!!inView)}>
										<AnimationWrapper inView={isInView}>
											<HomeNoCodeBrowserContainer inView={isInView}>
												<StyledImg
													src={imgUrl} />
											</HomeNoCodeBrowserContainer>
											<Creator inView={isInView} />
										</AnimationWrapper>
									</InView>
								</HomeNoCodeContainer>
							</FullWidth>
							<FeatureColumnOffsetLarge>
								<Build />
							</FeatureColumnOffsetLarge>
						</GutterFluid>
					</Wrapper>
				</Container>
			</OverflowHidden>
		</RelativeDiv>
	)
}