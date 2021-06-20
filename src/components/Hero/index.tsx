import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Text } from 'rebass'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Row, { RowBetween } from '../Row'
import { ButtonPrimary } from '../Button'
import { App } from '../Globe'

const ContentWrapper = styled.div`
  overflow: hidden;
`

const HeroContainer = styled.div`
	position: relative;
	width: 100%;
	min-height: 750px;
  max-height: 926px;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: 94vh;
    min-height: 860px;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    min-height: 850px;
  `};
`

const HomeHero = styled.div`
	z-index: 1;
	padding: 6rem 0 0;
	overflow: hidden;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	${({ theme }) => theme.mediaWidth.upToSmall`
   	padding: 6rem 0 0 !important;
  `};

	${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 8rem 0 !important;
  `};
`

const HomeHeroContainer = styled(RowBetween)`
	max-width: 1280px;
	
	height: 100%;
	margin-right: auto;
  margin-left: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-bottom: 80px;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-right: 1rem;
    padding-left: 1rem;
  `};
`

const GutterFluid = styled(Row)`
	margin-right: -1rem;
  margin-left: -1rem;
  padding-left: 0;
  padding-right: 0;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-right: 16px;
    padding-left: 16px;
    flex-direction: row;
    align-items: center;
  `};
`

const GutterSpaciousFluid = styled(GutterFluid)`
	margin-right: -1.5rem;
  margin-left: -1.5rem;
`

const GutterSpaciousFluidCondensed = styled(GutterSpaciousFluid)`
	margin-right: -.5rem;
  margin-left: -.5rem;
  text-align: left;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-right: -1.5rem;
  	margin-left: -1.5rem;
  `};
`

const HeroH1 = styled(Text)`
  font-family: var(--ifm-font-family-heavy);
	text-align: center;
	font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.025em;
  margin-bottom: 16px !important;
  z-index: 2;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
  	text-align: center !important;
    font-size: 3rem;
    line-height: .96;
    letter-spacing: -.025em;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
  	text-align: left !important;
		font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
  	text-align: left !important;
    font-size: 4rem;
    line-height: .96;
    letter-spacing: -.025em;
  `};
`

const HeroDescription = styled(Text)`
  font-family: var(--ifm-font-family-light);
	margin-bottom: 24px;
	line-height: 1.25;
	z-index: 2;
	margin-bottom: 24px !important;
	color: ${({ theme }) => theme.text2};
	font-size: 1rem;
  

	${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 1.5rem;
    text-align: center !important;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
  	text-align: left !important;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
  	text-align: left !important;
  `};
`

const HomeGlobeWrapper = styled.div`
	padding-right: 1.5rem;
  padding-left: 1.5rem;
  text-align: center;
  position: relative;
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    text-align: left;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
  `};
`

const HomeGlobeContainer = styled.div`
  position: relative;
  height: 150vw;
  max-height: 900px;
  width: 100vw;
  left: 0;
  margin-left: -13.5%;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  	width: 100vw;
    left: 0;
    margin-left: -13.5%;
  `};

 	${({ theme }) => theme.mediaWidth.upToLarge`
    left: 0;
    width: 900px;
    height: 900px;
    margin-left: -100px;
  `};
`

const HomeGlobe = styled.div`
	margin-top: 0px;
	margin-right: auto;
	margin-left: auto;
	height: 100%;
	width: 100%;
	position: relative;

	${({ theme }) => theme.mediaWidth.upToSmall`
		margin-top: 0px;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
		margin-top: 0px;
  `};

	${({ theme }) => theme.mediaWidth.upToLarge`
    margin-top: 8px;
  `};

  
`

const StyledRow = styled(Row)`
	padding: 0 1.5rem;
	text-align: center;
	flex-direction: column;

	${({ theme }) => theme.mediaWidth.upToMedium`
    text-align: left;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 50%;
  `};
`

const StyledLeftRow = styled(StyledRow)`
	align-items: flex-start;
	${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: -16px;
    margin-right: 16px;
  `};
`

const CTAContainer = styled.div`
	position: relative;
	margin: 0 auto;
	z-index: 2;
	width: 100%;

	${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 33.75rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 0;
  `};
`

const CTAWrapper = styled(Row)`
	flex-direction: column;
	${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: row;
  `};
`

const StatisticsContainer = styled.div`
	margin-top: 24px;
	z-index: 1;
	position: relative;
	width: 100%;


	${({ theme }) => theme.mediaWidth.upToLarge`
    bottom: 64px;
    left: 0;
    right: 0;
    position: absolute;
  `};
`

const StatisticsWrapper = styled.div`
	margin-right: auto;
  margin-left: auto;
  max-width: 1280px;

	${({ theme }) => theme.mediaWidth.upToLarge`
    padding-right: 16px;
    padding-left: 16px;
  `};
`

const StatisticsBox = styled.div`
	border-top: 1px solid rgba(255,255,255,0.1);
	padding-top: 24px;
	padding-bottom: 24px;
	text-align: center;

	${({ theme }) => theme.mediaWidth.upToMedium`
    text-align: left;
  `};

`

const Statistic = styled.div`
	width: 50%;
	text-align: center;

	${({ theme }) => theme.mediaWidth.upToSmall`
    width: 33.33333%;
  `};

 	${({ theme }) => theme.mediaWidth.upToMedium`
    width: 25%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    text-align: left
  `};
`

const StatisticTitle = styled(Text)`
	font-size: 1.25rem;
	font-weight: 400;
	line-height: 1.25;
	color: ${({ theme }) => theme.white};
`

const StatisticLabel = styled(Text)`
	font-size: .75rem;
	color: ${({ theme }) => theme.white};
`

const items = [{
	title: '65+ million',
	label: 'Developers'
}, {
	title: '3+ million',
	label: 'Organizations'
}, {
	title: '200+ million',
	label: 'Repositories'
}]

export function Hero() {
	const theme = useContext(ThemeContext)
  const { siteConfig } = useDocusaurusContext()
  const { customFields } = siteConfig
  
	return (
		<ContentWrapper>
			<HeroContainer>
				<HomeHero>
					<HomeHeroContainer flexDirection="column">
						<GutterSpaciousFluid>
							<StyledLeftRow> 
								<HeroH1>
									The payments protocol for the future of money
								</HeroH1>
								<HeroDescription>
                  Accept payments in cryptocurrencies without fees or permission. 
                  From sending simple payment links to fully customized integrations, 
                  SFPY helps you get paid and earn passive income in digital 
                  currencies while leaving you in full control of your funds.
								</HeroDescription>
								<CTAContainer>
									<CTAWrapper>
										<ButtonPrimary href={`${customFields.appUrl}/#/signup`} margin="0.5rem">
											Get started now
										</ButtonPrimary>
									</CTAWrapper>
								</CTAContainer>
							</StyledLeftRow>
							<HomeGlobeWrapper>
								<HomeGlobeContainer>
									<HomeGlobe>
										<App 
											primaryColor={theme.primary1}
										/>
										
									</HomeGlobe>
								</HomeGlobeContainer>
							</HomeGlobeWrapper>
						</GutterSpaciousFluid>
					</HomeHeroContainer>
				</HomeHero>
			</HeroContainer>
		</ContentWrapper>
	)
}