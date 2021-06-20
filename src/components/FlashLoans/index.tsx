import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Text } from 'rebass'
import { ArrowRight } from 'react-feather'
import { InView } from 'react-intersection-observer';
import { ButtonExternal } from '../Button';
import { Featured } from './ExchangeFeature';
import useBaseUrl from '@docusaurus/useBaseUrl';

const OverflowHidden = styled.div`
	overflow: hidden;
`

const ContainerXL = styled.div`
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

const GutterSpaciousFluid = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin-right: -1.5rem;
  margin-left: -1.5rem;
`

const Col12 = styled.div`
	width: 100%;
	padding-right: 1.5rem;
  padding-left: 1.5rem;
`

const HomeFlashLoanLight = styled.div`
	width: 83.33333%;
	margin-left: 8.33333%;
	position: relative;
	padding-top: 96px;
	padding-right: 1.5rem;
  padding-left: 1.5rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    :after {
    	left: -1.5rem;
    }
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-top: 112px;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-bottom: 40px;
  `};
`

const TitleContainer = styled.div`
	width: 100%;
  max-width: 33.75rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 33.75rem;
  `};
`

const MarketingTitle = styled(Text)`
	font-family: var(--ifm-font-family-heavy);
	margin-bottom: 1.5rem !important;
	overflow: visible;
	font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.025em;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 3.5rem;
    font-weight: 800;
    line-height: .96;
    letter-spacing: -.025em;
  `};
`

const Col12Offset = styled(Col12)`
	margin-left: 8.33333%
`

const FlashLoanList = styled.ul`
	padding-left: 0;
  margin-top: 0;
  flex-direction: column;
  list-style: none;
  display: flex;
  position: relative;
  margin-bottom: 64px;
  margin-right: -1.5rem;
  margin-left: -1.5rem;

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
  	margin-bottom: 128px;
    :after {
    	left: -1.5rem;
    }
  `};
`

const FlashLoanFullWidthItem = styled.li`
	width: 91.66667%;
	padding-right: 1.5rem;
  padding-left: 1.5rem;

	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 83.33333%;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `};
`

const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 40px;
	padding-bottom: 80px;
	margin-right: -1.5rem;
  margin-left: -1.5rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-bottom: 96px;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-top: -20px;
    flex-direction: row;
  `};
`

const SecondItemContainer = styled(ItemContainer)`
	padding-top: 80px!important;
  padding-bottom: 80px!important;
  margin-top: 0;
  margin-right: -1.5rem;
  margin-left: -1.5rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-bottom: 0px;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-top: 0px;
  `};
`

const ResponsiveColumn = styled.div`
	width: 100%;
	padding-right: 1.5rem;
  padding-left: 1.5rem;

  ${({ theme }) => theme.mediaWidth.upToLarge`
   	width: 41.66667%;
  `};
`

const GutterIcon = styled.div`
	position: relative;
	float: left;
	margin-right: -40px;
	margin-left: calc(-2.5rem - 3px);
	z-index: 1;
	overflow: hidden;
	width: 28px;
	height: 24px;

	background: ${({ theme }) => theme.primary1};

	${({ theme }) => theme.mediaWidth.upToSmall`
    margin-left: calc(-3rem - 13px);
  `};
`

const BetaBadgeContainer = styled(Text)<{inView: boolean}>`
	
	margin-top: 0;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  margin-bottom: 16px;
  display: inline-block;
  margin-bottom: 16px !important;
  opacity: 0;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(-15px);
  padding: 1px;
  background: linear-gradient(-70deg, #2188ff 0%, #804eda 100%);

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0);
			`
			: null}
`

const BadgeSpan = styled.span`
	background-color: ${({ theme }) => theme.white};
	padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  text-transform: uppercase;
  display: inline-block;
  border-radius: 0.3125rem;
`

const BadgeText = styled.span`
	background: -webkit-linear-gradient(-70deg,#2188ff,#804eda);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
`

const MarketingDescription = styled(Text)<{inView: boolean}>`
	font-family: var(--ifm-font-family-light);
	font-size: 1.25rem;
	line-height: 1.25;
	font-weight: 500;
	margin-bottom: 32px !important;
	color: ${({ theme }) => theme.text2};
	width: 100%;
  max-width: 33.75rem;

  opacity: 0;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(-15px);

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 33.75rem;
    font-size: 1.5rem!important;
    font-weight: 600;
    line-height: 1.1;
  `};

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0);
			`
			: null}
`

const StyledButton = styled(ButtonExternal)<{inView: boolean}>`
	opacity: 0;
	width: fit-content;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(-15px);

	&:hover {
    color: inherit;
  }

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0);
			`
			: null}
`

const ResponsiveColumnOffset = styled(ResponsiveColumn)`
	${({ theme }) => theme.mediaWidth.upToLarge`
   	width: 41.66667%;
   	margin-left: 8.33333%
  `};
`

const FlashLoanEditors = styled.div<{inView: boolean}>`
	position: relative;
	max-width: 492px;
  margin-top: 40px;
  opacity: 0;
  transition: opacity .4s;

  ${({ theme }) => theme.mediaWidth.upToLarge`
   	margin-top: -30%;
  `};

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
			`
			: null}
`

const SecondFlashLoanEditors = styled(FlashLoanEditors)`
	${({ theme }) => theme.mediaWidth.upToLarge`
   	margin-top: 0%;
  `};
`

const editor1 = keyframes`
	from {
    transform: translate3d(7%,12%,0)
  }

  to {
    transform: translateZ(0)
  }
`

const editor2 = keyframes`
	from {
    transform: translate3d(-7%,12%,0)
  }

  to {
    transform: translateZ(0)
  }
`

const FirstEditor = styled.div`
	border-radius: 6px;
	position: relative;
	overflow: hidden;
	width: 78%;
  max-width: 382px;
  margin: 0;
  font-size: 0;
  z-index: 1;
  box-shadow: 0 0 0 1px rgba(53,72,91,.1),0 2.76726px 2.21381px rgba(0,0,0,.07),0 6.6501px 5.32008px rgba(0,0,0,.04317),0 12.5216px 10.0172px rgba(0,0,0,.0339075),0 22.3363px 17.869px rgba(0,0,0,.0282784),0 41.7776px 33.4221px rgba(0,0,0,.0235573),0 100px 80px rgba(0,0,0,.0174624)!important;
	${({ inView }) =>
		inView
		? css`
				visibility: visible;
    		animation: ${editor1} .4s cubic-bezier(.16,1,.3,1) forwards;
			`
			: null}  
`

const FirstEditorImage = styled.img`
	width: 100%;
	height: auto;
	opacity: .4;
	
`

const SecondEditor = styled(FirstEditor)`
	float: right;
	margin: -20% 0 0;
	${({ inView }) =>
		inView
		? css`
				visibility: visible;
    		animation: ${editor2} .4s cubic-bezier(.16,1,.3,1) forwards;
			`
			: null} 
`

const SecondEditorImageWrapper = styled.div<{inView: boolean}>`
	border-radius: 6px!important;
	overflow: hidden;
	float: right;
	box-shadow: 0 0 0 1px rgb(53 72 91 / 10%);

	${({ inView }) =>
		inView
		? css`
				box-shadow: 0 0 0 2px var(--color-auto-green-5);
		    transition-delay: 1.5s;
		    transition-duration: .2s;
		    transition-property: box-shadow;
			`
			: null}
`

const SecondEditorImage = styled.img`
	width: 100%;
	height: auto;
	min-width: 10px;
`

export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0.01

export function FlashLoans() {
	const [firstInView, setFirstInView] = useState<boolean>(false)
	const [secondInView, setSecondInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

	return (
		<OverflowHidden>
			<ContainerXL>
				<GutterSpaciousFluid>
					<Col12>
						<GutterSpaciousFluid>
							<HomeFlashLoanLight>
								<TitleContainer>
									<MarketingTitle>
										Instant access to collateral free liquidity
									</MarketingTitle>
									<MarketingDescription inView={true}>
										Borrow instantly, easily and for free.
									</MarketingDescription>
								</TitleContainer>
							</HomeFlashLoanLight>
							<Col12Offset>
								<FlashLoanList>
									<FlashLoanFullWidthItem>
										<InView as="div" {...options} onChange={(inView, entry) => setFirstInView(!!inView)}>
											<ItemContainer>
												<ResponsiveColumn>
													{/*<GutterIcon />*/}
													<MarketingDescription inView={firstInView}>
														Whether you need to swap collateral or you've found 
														a profitable arbitrage opportunity, don't let access 
														to capital slow you down. Craft your perfect strategy 
														and dip into any available liquidity pool.
													</MarketingDescription>
													<StyledButton href="/docs/03-smart-contracts/05-using-flash-loans" inView={firstInView}>
														Read more about flash loans <ArrowRight style={{marginLeft: "4px"}} />
													</StyledButton>
												</ResponsiveColumn>
												<ResponsiveColumnOffset>
													<FlashLoanEditors inView={firstInView}>
														<FirstEditor inView={firstInView}>
															<FirstEditorImage 
																width={"808px"}
															  aspectRatio={"auto 808 / 480"}
															  height={"480px"}
																src={useBaseUrl('img/pool-light-1.png')} 
															/>
														</FirstEditor>
														<SecondEditor inView={firstInView}>
															<SecondEditorImageWrapper inView={firstInView}>
																<SecondEditorImage
																	width={"768px"}
																  aspectRatio={"auto 768 / 792"}
																  height={"792px"}
																	src={useBaseUrl('img/pool-dark-1.png')}
																/>
															</SecondEditorImageWrapper>
														</SecondEditor>
													</FlashLoanEditors>
												</ResponsiveColumnOffset>
											</ItemContainer>
										</InView>
									</FlashLoanFullWidthItem>
									<FlashLoanFullWidthItem>
										<InView as="div" {...options} onChange={(inView, entry) => setSecondInView(!!inView)}>
											<SecondItemContainer>
												<ResponsiveColumn>
													{/*<GutterIcon />*/}
													<MarketingDescription inView={secondInView}>
														Execute your idea on any compatible DeFi protocol for profit 
														provided that the liquidity is returned back with a small taker 
														fee within one atomic transaction block.
													</MarketingDescription>
												</ResponsiveColumn>
												<Featured inView={secondInView} />
											</SecondItemContainer>
										</InView>
									</FlashLoanFullWidthItem>
								</FlashLoanList>
							</Col12Offset>
						</GutterSpaciousFluid>
					</Col12>
				</GutterSpaciousFluid>
			</ContainerXL>
		</OverflowHidden>
	)
}