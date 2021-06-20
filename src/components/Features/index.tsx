import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import { FeaturesList } from './Features'

const RelativeDiv = styled.div`
	position: relative;
	overflow: hidden;
	width: 100%;
	z-index: 1;
`

const ContainerLarge = styled.div`
	margin-right: auto!important;
  margin-left: auto!important;
  max-width: 1280px;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  `};
`

const GutterSpaciousFluid = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	margin-right: -1.5rem;
  margin-left: -1.5rem;
`

const HomeFeatureLight = styled.div`
	width: 100%;
	position: relative;
	padding-top: 32px;
	padding-right: 1.5rem;
	padding-left: 1.5rem;

	${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 8.33333%;
    padding-top: 40px;
  `};
`

const GutterFluid = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	margin-right: -1.5rem;
  margin-left: -1.5rem;
`

const HeroContainer = styled.div`
	position: relative;
	width: 83.33333%;
	margin-left: 8.33333%;
	padding-bottom: 32px;
	padding-top: 40px;
	padding-right: 1.5rem;
	padding-left: 1.5rem;

	${({ theme }) => theme.mediaWidth.upToMedium`
    padding-top: 0;
    padding-bottom: 40px;
    margin-bottom: 0;
  `};
`

const HeroColumn = styled.div`
	width: 100%;
  max-width: 33.75rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 31.75rem;
  `};
`

const GradientText = styled.span`
	-webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  -webkit-background-clip: text;
  background-image: linear-gradient(285.24deg, rgb(247, 203, 192) 0%, rgb(251, 234, 227) 17.81%, rgb(244, 177, 171) 29.8%, rgb(132, 118, 217) 49.78%, rgb(141, 180, 255) 69.77%);
`

const HeroMarketingHeader = styled(Text)`
  font-family: var(--ifm-font-family-heavy);
	margin-bottom: 16px;
	font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.025em;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 3rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    font-size: 3.5rem!important;
    font-weight: 800;
    line-height: .96;
    letter-spacing: -.025em;
  `};
`

const OffsetContainer = styled.div`
	width: 100%;
	margin-left: 8.33333%;
	position: relative;
	padding-right: 1.5rem;
  padding-left: 1.5rem;
`

export function Features() {

	return (
		<RelativeDiv>
			<ContainerLarge>
				<GutterSpaciousFluid>
					<HomeFeatureLight>
						<GutterFluid>
							<HeroContainer>
								<HeroColumn>
									<HeroMarketingHeader>
										<GradientText>Web 3.0 ready.</GradientText><br />
										Familiar concepts with a new backbone.
									</HeroMarketingHeader>
								</HeroColumn>
							</HeroContainer>
							<OffsetContainer>
								<FeaturesList />
							</OffsetContainer>
						</GutterFluid>
					</HomeFeatureLight>
				</GutterSpaciousFluid>
			</ContainerLarge>
		</RelativeDiv>
	)
}