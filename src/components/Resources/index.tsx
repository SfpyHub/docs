import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import {
	ApiItem,
	DocsItem,
	AppItem,
	PaymentsItem,
	FlashLoanItem,
	FlashAppItem,
	GitHubItem,
	TwitterItem,
	DiscordItem
} from './Item'

export const Wrapper = styled.div`
	max-width: 1464px;
	margin: 0 auto;
	background: ${({ theme }) => theme.bg2};
	position: relative;
	padding-bottom: 112px;

	${({ theme }) => theme.mediaWidth.upToMedium`
    padding-bottom: 128px;
  `}}

  ${({ theme }) => theme.mediaWidth.upToExtraLarge`
    border-radius: 18px;
  `}
`

export const Container = styled.div`
	margin-right: auto;
  margin-left: auto;
  max-width: 1280px;
  padding-top: 7.5rem;
  padding-right: 1rem;
  padding-left: 1rem;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  	padding-left: 2.5rem;
  	padding-right: 2.5rem;
	`}
`

export const Items = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const Title = styled.div`
	padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: 32px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
  	width: 83.33333%;
  	margin-bottom: 40px;

  `}
`

export const MarketingTitle = styled(Text)`
  font-family: var(--ifm-font-family-heavy);
	margin-bottom: 8px;
	color: ${({ theme }) => theme.white};
	margin-bottom: 16px !important;
	font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -.025em;
  word-break: keep-all;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  	margin-bottom: 16px !important;
  `}

  ${({ theme }) => theme.mediaWidth.upToMedium`
  	font-weight: 800;
    line-height: .96;
    letter-spacing: -.025em!important;
    font-size: 4.5rem;
  `}
`

export const MarketingDescription = styled.p`
	font-family: var(--ifm-font-family-light);
	margin-bottom: 24px;
	line-height: 1.25;
	color: ${({ theme }) => theme.text2};
	font-size: 1.25rem;
	font-weight: 500;

	${({ theme }) => theme.mediaWidth.upToSmall`
		font-size: 1.5rem;
		font-weight: 600;
	`}

	${({ theme }) => theme.mediaWidth.upToMedium`
  	line-height: 1.5;
  `}
`

const List = styled.div<{size?: string, direction?: string}>`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		padding: 0 2rem;
		flex-direction: ${({ direction }) => direction === "row" ? "row" : "column"};
	`}

	${({ theme }) => theme.mediaWidth.upToSmall`
		padding: 0 2rem;
		flex-direction: ${({ direction }) => direction === "row" ? "row" : "column"};
	`}

	${({ theme }) => theme.mediaWidth.upToMedium`
		padding: 0;
		align-items: stretch;
		flex-direction: row;
	`}
`

export function Resources() {

	return (
		<Wrapper>
			<Container>
				<Items>
					<Title>
						<MarketingTitle>
							All the resources you need to accept tokenized payments
						</MarketingTitle>
						<MarketingDescription>
							Learn more about the protocol and accept payments through the open source app or integrate payments into your websites with our API
						</MarketingDescription>
						<List size="lg">
							<ApiItem size="lg" />
							<AppItem size="lg" />
							<DocsItem size="lg" />
						</List>
					</Title>
					<Title>
						<MarketingDescription>
							Skip to learning how to integrate decentralized payments, write smart contracts to execute flash loans, or build immutable apps with Flash Apps.
						</MarketingDescription>
						<List direction="row">
							<PaymentsItem />
							<FlashLoanItem />
							<FlashAppItem />
						</List>
					</Title>
					<Title>
						<MarketingDescription>
							Dig in to code on GitHub, follow us for updates on Twitter or connect with us on Discord
						</MarketingDescription>
						<List direction="row">
							<GitHubItem />
							<TwitterItem />
							<DiscordItem />
						</List>
					</Title>
				</Items>
			</Container>
		</Wrapper>
	)
}