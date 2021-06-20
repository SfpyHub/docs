import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'rebass'
import { InView } from 'react-intersection-observer';
import { ArrowRight } from 'react-feather'
import { ButtonExternal } from '../Button';
import Row, { RowBetween } from '../Row';

const Container = styled.div`
	overflow: hidden;
`

const LargeWrapper = styled.div`
	margin-right: auto;
  margin-left: auto;
  max-width: 1280px;

  padding-top: 64px;
  padding-bottom: 64px;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding-top: 80px;
    padding-bottom: 80px;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    padding-right: 1rem;
    padding-left: 1rem;
  `};
`

const GutterFluid = styled(Row)``

const Wrapper = styled.div`
	padding-right: 1.5rem!important;
  padding-left: 1.5rem!important;
  width: 100%;
  max-width: 67.5rem;
  margin-right: auto!important;
  margin-left: auto!important;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 68.75rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    max-width: 67.5rem;
  `};
`

const AnimationWrapper = styled.div<{inView: boolean}>`
	box-shadow: 0 0 0 1px rgba(53,72,91,.1),0 3px 2px rgba(0,0,0,.04),0 7px 5px rgba(0,0,0,.02),0 13px 10px rgba(0,0,0,.02),0 22px 17px rgba(0,0,0,.02);
	border-radius: 6px;
	background-image: radial-gradient(circle closest-corner,rgb(247,203,192) 0%,rgb(251,234,227) 10.81%,#ffcb57 29.8%,#a960ee 49.78%,#90e0ff 69.77%);
	overflow: hidden;
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

export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0.01

const AnnouncementWrapper = styled(Row)`
	position: relative;
`

const AnnouncementTextWrapper = styled.div`
	width: 100%;
  max-width: 33.75rem;
  margin-right: auto;
  margin-left: auto;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 0;
    margin-right: 0;
  `};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    max-width: 33.75rem;
  `};
`

const AnnouncementTextBox = styled.div`
	margin-bottom: 15%;
  padding-top: 24px;
  z-index: 1;
  text-align: center;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 24px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 75%;
    margin-bottom: 0;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: left;
    margin-bottom: 0;
    padding-left: 48px;
    align-items: flex-start;
  `};
`

const Announcement = styled(Text)`
  font-family: var(--ifm-font-family-heavy);
	max-width: 310px;
	font-size: 1.5rem;
	font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem !important;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }) => theme.bg1};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin-left: 0;
    margin-right: 0;
  `};
`

const AnnouncementImage = styled.div`
	right: 0;
	text-align: right;
	height: 100%;
	position: absolute;
	width: 100%;

	${({ theme }) => theme.mediaWidth.upToMedium`
    width: 66.66667%;
  `};
`

const StyledAnnouncementButton = styled(ButtonExternal)`
	color: ${({ theme }) => theme.bg3};
  text-align: left;
	&:hover {
    color: ${({ theme }) => theme.bg3};
  }
`

const StyledArrow = styled(ArrowRight)`
  margin-right: -1.25rem;
  margin-left: 4px;
`

export function Sidekick() {
	const [isInView, setInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

	return (
		<Container>
			<LargeWrapper>
				<GutterFluid>
					<Wrapper>
						<InView as="div" {...options} onChange={(inView, entry) => setInView(!!inView)}>
							<AnimationWrapper inView={isInView}>
								<AnnouncementWrapper>
									<AnnouncementTextWrapper>
										<AnnouncementTextBox>
											<Announcement>
												Join the defiant ones using SFPY
											</Announcement>
											<StyledAnnouncementButton href="/blog/announcing-sfpy">
												Announcement
												<StyledArrow size={18} />
											</StyledAnnouncementButton>
										</AnnouncementTextBox>
									</AnnouncementTextWrapper>
                  <AnnouncementImage>

                  </AnnouncementImage>
								</AnnouncementWrapper>
							</AnimationWrapper>
						</InView>
					</Wrapper>
				</GutterFluid>
			</LargeWrapper>
		</Container>
	)
}