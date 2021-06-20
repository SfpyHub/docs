import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Text } from 'rebass'
import { InView } from 'react-intersection-observer';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0;
	margin-right: -1.5rem;
  margin-left: -1.5rem;
`

const FeatureListItem = styled.li`
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

const ListItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: -1.5rem;
  margin-left: -1.5rem;
  padding: 8% 0 10.5%;

	${({ theme }) => theme.mediaWidth.upToLarge`
    flex-direction: row;
  `};

`

const ListItemFeatureWrapper = styled.div`
	width: 100%;
	padding-right: 1.5rem;
  padding-left: 1.5rem;

	${({ theme }) => theme.mediaWidth.upToLarge`
    width: 41.66667%;
  `};
`

const AnimatedFeatureHeader = styled.h3<{inView: boolean}>`
	width: 100%;
	color: ${({ theme }) => theme.primary2};
	font-family: var(--ifm-font-family-light);
  max-width: 33.75rem;
	font-size: 1.25rem;
	font-weight: 500;
  line-height: 1.25;
  margin-bottom: 32px;
  opacity: 0;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(-15px);

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.1;
    max-width: 33.75rem;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-bottom: 0;
  `};

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0);
			`
			: null}
`

const AnimatedSubLabel = styled.span`
	color: ${({ theme }) => theme.text2};
`

const ListItemImageWrapper = styled.div<{inView: boolean}>`
	z-index: 2;
	border-radius: 24px;
	overflow: hidden;
	position: relative;
	max-width: 490px;
  font-size: 0;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 0 1px rgb(53 72 91 / 5%);
  transition: transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(35%) scale(0.75);

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0) scale(0.75);
    		box-shadow: 0 0 0 1px rgb(53 72 91 / 10%), 0 2px 2px rgb(0 0 0 / 3%), 0 4px 4px rgb(0 0 0 / 4%), 0 10px 8px rgb(0 0 0 / 5%), 0 15px 15px rgb(0 0 0 / 6%), 0 30px 30px rgb(0 0 0 / 7%), 0 70px 65px rgb(0 0 0 / 9%);
			`
			: null}
`

const ListItemImage = styled.img<{inView: boolean}>`
	width: 100%;
	opacity: .25;
  transition: opacity .6s cubic-bezier(.16,1,.3,1);

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0);
			`
			: null}
`

export const DEFAULTMARGINBOTTOM = 30
export const DEFAULTMARGINTOP = 0
export const DEFAULTTHRESHOLD = 0.01

const features = [
	{
		label: "Cross currency acceptance",
		sublabel: "—denominate a payment in USD and accept currencies such as ETH, DAI and USDC with an on-chain price feed.",
		src: 'img/pay-currencies.png'
	},
	{
		label: "Refunds built in on chain. ",
		sublabel: "Easily return part or the full amount of any payment back to your customer's wallet.",
		src: 'img/refund-dark.png'
	},
	{
		label: "Always remain in control of your funds and withdraw them at any time. ",
		sublabel: "Convert your receivables into an asset class and earn fees as a liquidity provider. Withdraw as much as you want on your terms. Be your own treasurer.",
		src: 'img/withdraw-dark.png'
	}
]

function Feature({ label, sublabel, src }: { label: string, sublabel: string, src: string }) {
	const [isInView, setInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

  return (
  	<InView as="div" {...options} onChange={(inView, entry) => setInView(!!inView)}>
			<FeatureListItem>
				<ListItemContainer>
					<ListItemFeatureWrapper>
						<AnimatedFeatureHeader inView={isInView}>
							{ label } <AnimatedSubLabel>{sublabel}</AnimatedSubLabel>
						</AnimatedFeatureHeader>
					</ListItemFeatureWrapper>
					<ListItemFeatureWrapper>
						<ListItemImageWrapper inView={isInView}>
							<ListItemImage inView={isInView} src={useBaseUrl(src)} />
						</ListItemImageWrapper>
					</ListItemFeatureWrapper>
				</ListItemContainer>
			</FeatureListItem>
		</InView>
  )
}

export function FeaturesList() {
	const [isInView, setInView] = useState<boolean>(false)
	const options = {
    rootMargin: `-${DEFAULTMARGINTOP}% 0% -${DEFAULTMARGINBOTTOM}% 0%`,
  	threshold: DEFAULTTHRESHOLD
  }

	return (
		<FeatureList>
			{features.map((feature, i) => (
				<Feature
					key={i}
					label={feature.label}
					sublabel={feature.sublabel}
					src={feature.src}
				/>
			))}
		</FeatureList>
	)
}




