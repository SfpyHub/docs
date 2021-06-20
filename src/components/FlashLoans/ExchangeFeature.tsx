import React, { useMemo } from 'react'
import styled, { css } from 'styled-components'

import Uni from '@site/static/img/exchanges/uni-logo.svg'
import Bal from '@site/static/img/exchanges/bal-logo.svg'
import Comp from '@site/static/img/exchanges/comp-logo.svg'
import Crv from '@site/static/img/exchanges/crv-logo.svg'
import Knc from '@site/static/img/exchanges/knc-logo.svg'
import Uma from '@site/static/img/exchanges/uma-logo.svg'
import Zrx from '@site/static/img/exchanges/zrx-logo.svg'
import Aave from '@site/static/img/exchanges/aave-logo.svg'
import Snx from '@site/static/img/exchanges/snx-logo.svg'

const LargeOffsetColumn = styled.div<{inView: boolean}>`
	padding-right: 1.5rem;
  padding-left: 1.5rem;
  width: 100%;
  opacity: 0;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transform: translateX(-15px);

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-left: -16.66667%;
    width: 50%;
  `};

  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
    		transform: translateX(0);
			`
			: null}
`

const FeaturedExchanges = styled.div`
	margin-left: -8.33333%;
	left: 50%;
  width: 141.66667%;
  transform: translateX(-50%);
  position: relative;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    left: auto;
    transform: translateX(0);
    margin-left: 0;
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    left: auto;
    transform: translateX(0);
    margin-left: 0;
  `};
`

const RowOffset1 = styled.div`
	margin-right: -.5rem;
  padding-top: 8px;
  padding-bottom: 8px;
  display: flex;
  width: 100%;
  flex-shrink: 0;
  justify-content: center;
  margin-left: 8.33333%;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-right: -1rem;
    margin-left: 25%;
  `};
`

const RowOffset2 = styled(RowOffset1)`
  margin-left: -.5rem;

  ${({ theme }) => theme.mediaWidth.upToLarge`
  	margin-right: -.5rem;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-left: 16.66667%;
`};
`

const RowOffset3 = styled(RowOffset1)`
	margin-left: 8.33333% !important;

	${({ theme }) => theme.mediaWidth.upToLarge`
  	margin-right: -.5rem;
    padding-top: 16px;
    padding-bottom: 16px;
`};
`

const ExchangeItem = styled.div<{index: number, inView: boolean}>`
	padding-right: .5rem;
  padding-left: .5rem;
  opacity: 0;
  transition: opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1);
  transition-delay: ${({ index }) => `0.${(index+1)}s`};
  ${({ inView }) =>
		inView
		? css`
				opacity: 1;
			`
			: null}
`

const ExchangeItemIcon = styled.div`
	box-shadow: 0 0 0 1px hsla(0,0%,100%,.1),0 3px 2px rgba(0,0,0,.04),0 7px 5px rgba(0,0,0,.02),0 13px 10px rgba(0,0,0,.02),0 22px 17px rgba(0,0,0,.02)!important;
  transition: background-color .4s;
  display: block;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ExchangeItemImage = styled.div<{from: string, to: string}>`
	width: 75px;
	height: 75px;
	border-radius: 18px;
	background: ${({from, to}) => `linear-gradient(top, ${from} 0%, ${to} 100%)`};
	background: ${({from, to}) => `-webkit-linear-gradient(top, ${from} 0%, ${to} 100%)`};
	background: ${({from, to}) => `-moz-linear-gradient(top, ${from} 0%, ${to} 100%)`};
	background: ${({from, to}) => `-ms-linear-gradient(top, ${from} 0%, ${to} 100%)`};
	background: ${({from, to}) => `-o-linear-gradient(top, ${from} 0%, ${to} 100%)`};

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		width: 105px;
		height: 105px;
	`}
`

const Row1 = [{
	name: "uni",
	from: "#FF3797",
	to: "#ff007a",
	icon: (Uni)
}, {
	name: "bal",
	from: "#1E1E1E",
	to: "#1E1E1E",
	icon: (Bal)
}, {
	name: "comp",
	from: "#060A0E",
	to: "#060A0E",
	icon: (Comp)
}]

const Row2 = [{
	name: "crv",
	from: "#FFFFFF",
	to: "#FFFFFF",
	icon: (Crv)
}, {
	name: "knc",
	from: "#30CB9E",
	to: "#30CB9E",
	icon: (Knc)
}, {
	name: "uma",
	from: "#FF4A4A",
	to: "#FF4A4A",
	icon: (Uma)
}]

const Row3 = [{
	name: "zrx",
	from: "#231815",
	to: "#231815",
	icon: (Zrx)
}, {
	name: "aave",
	from: "#B6509E",
	to: "#2EBAC6",
	icon: (Aave)
}, {
	name: "snx",
	from: "#0C032F",
	to: "#160659",
	icon: (Snx)
}]

export function Featured({ inView }: { inView: boolean }) {
	return (
		<LargeOffsetColumn inView={inView}>
			<FeaturedExchanges>
				<RowOffset1>
					{Row1.map((e, i) => (
						<ExchangeItem key={i} index={i} inView={inView}>
							<ExchangeItemIcon>
								<ExchangeItemImage from={e.from} to={e.to}>
									<e.icon />
								</ExchangeItemImage>
							</ExchangeItemIcon>
						</ExchangeItem>
					))}
				</RowOffset1>
				<RowOffset2>
					{Row2.map((e, i) => (
						<ExchangeItem key={i} index={i} inView={inView}>
							<ExchangeItemIcon>
								<ExchangeItemImage from={e.from} to={e.to}>
									<e.icon />
								</ExchangeItemImage>
							</ExchangeItemIcon>
						</ExchangeItem>
					))}
				</RowOffset2>
				<RowOffset3>
					{Row3.map((e, i) => (
						<ExchangeItem key={i} index={i} inView={inView}>
							<ExchangeItemIcon>
								<ExchangeItemImage from={e.from} to={e.to}>
									<e.icon />
								</ExchangeItemImage>
							</ExchangeItemIcon>
						</ExchangeItem>
					))}
				</RowOffset3>
			</FeaturedExchanges>
		</LargeOffsetColumn>
	)
}