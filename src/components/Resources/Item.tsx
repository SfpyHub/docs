import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'
import { 
	Package, 
	BookOpen, 
	Zap,
	Globe,
	Layers,
	CloudLightning,
	Cloud
} from 'react-feather'
import {useHistory} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Github from '@site/static/img/github.svg'
import Twitter from '@site/static/img/twitter.svg'
import Discord from '@site/static/img/discord.svg'

const ListItem = styled.div<{inverted?: boolean, size?: string}>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	
	width: 100%;
	height: ${({ size }) => size === "lg" ? '100%' : 'fit-content'};
	background-color: ${({ theme, inverted }) => inverted ? theme.primary2 : theme.bg1};
	border-radius: 12px;

	padding: ${({ size }) => size === "lg" ? '1rem' : '0rem'};
	transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1) 0s;
	cursor: pointer;

	:hover{
		transform: translate3d(2px, 2px, 10px);
	}

	:not(:first-of-type) {
    margin-top: 24px;
  }

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		flex-direction: ${({ direction }) => direction === "row" ? "row" : "column"};
		width: ${({ size }) => size === "lg" ? '100%' : 'fit-content'};
		margin-top: 0;

		:not(:first-of-type) {
			margin-top: ${({ size }) => size === "lg" ? "24px" : "0px"};
		}
	`}

	${({ theme, size }) => size === "lg" ? theme.mediaWidth.upToExtraSmall`
		:not(:first-of-type) {
			margin-top: 24px;
		}
	` : `
		:not(:first-of-type) {
			margin-top: 0px;
		}
	`}

	${({ size, theme }) => 
		size === "lg" ? theme.mediaWidth.upToMedium`
			width: 100%;
			height: 245px;
			max-width: 200px;
			min-width: 200px;
			padding: 1rem;
	` : ``};

	${({ theme }) => theme.mediaWidth.upToMedium`
		margin-top: 0px !important;
		:not(:first-of-type) {
	    margin-left: 12px;
	  }
	`}

`

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	border-radius: 12px;

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		width: fit-content;
	`}

	${({ theme }) => theme.mediaWidth.upToSmall`
		flex-direction: row;
		width: fit-content;
	`}

	${({ theme }) => theme.mediaWidth.upToMedium`
		align-items: center;
		flex-direction: column;
		width: fit-content;
	`}

	${({ theme }) => theme.mediaWidth.upToLarge`
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: 100%;
		width: fit-content;
	`}
`

const Icon = styled.div<{bg?: string, inverted?: boolean, size?: string}>`
	width: ${({ size }) => size === "lg" ? '70px' : '100%'};
	height: ${({ size }) => size === "lg" ? '70px' : '100px'};
	border-radius: 6px;
	background: ${({theme, bg, inverted}) => bg ? bg : inverted ? theme.white : theme.primary2};
	display: flex;
	align-items: center;
	justify-content: center;

	${({ theme }) => theme.mediaWidth.upToExtraSmall`
		${({ size }) => size === "lg"
			? `width: 70px;` : `width: 100px;`
		}`}
`

const StyledPackage = styled(Package)<{reversed?: boolean}>`
	color: ${({ theme, reversed }) => reversed ? theme.primary2 : theme.white};
`
const StyledDocs = styled(BookOpen)<{reversed?: boolean}>`
	color: ${({ theme, reversed }) => reversed ? theme.primary2 : theme.white};	
`
const StyledApp = styled(Zap)<{reversed?: boolean}>`
	color: ${({ theme, reversed }) => reversed ? theme.primary2 : theme.white};
`
const StyledGlobe = styled(Globe)<{reversed?: boolean}>`
	color: ${({ theme, reversed }) => reversed ? theme.primary2 : theme.white};
`
const StyledLayers = styled(Layers)<{reversed?: boolean}>`
	color: ${({ theme, reversed }) => reversed ? theme.primary2 : theme.white};
`
const StyledCloud = styled(CloudLightning)<{reversed?: boolean}>`
	color: ${({ theme, reversed }) => reversed ? theme.primary2 : theme.white};
`

const LabelWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-left: 1rem;
	width: fit-content;
	flex-direction: column;

	${({ theme }) => theme.mediaWidth.upToSmall`
		justify-content: center;
	`}

	${({ theme }) => theme.mediaWidth.upToMedium`
		justify-content: space-between;
		align-items: center;
		margin-left: 0;
		margin-top: 1rem;
	`}

	${({ theme }) => theme.mediaWidth.upToLarge`
		justify-content: center;
	`}
`

const NameLabel = styled(Text)`
	font-family: var(--ifm-font-family-heavy);
	font-size: 1.3rem;
	font-weight: 600;
	color: ${({ theme }) => theme.white};
	margin-bottom: 0.5rem;
	text-align: left;

	${({ theme }) => theme.mediaWidth.upToMedium`
		text-align: center;
	`}

	${({ theme }) => theme.mediaWidth.upToLarge`
		font-size: 2rem;
	`}
`

const HelperLabel = styled(Text)<{inverted?: boolean}>`
	font-size: 1.1rem;
	color: ${({ theme, inverted }) => inverted ? theme.white : theme.primary2};
	margin-bottom: 0.5rem;
	text-align: left;

	${({ theme }) => theme.mediaWidth.upToMedium`
		text-align: center;
	`}
`

export function Item({ bg, inverted, icon, name, href, external, label, size }: {
	bg?: string
	inverted?: boolean
	icon: any
	name: string
	href: string
	external?: boolean
	label: string
	size?: string
}) {
	const history = useHistory();

	function onClick() {
		if (external) {
			window.location.assign(href)
		} else {
			history.push(href)
		}
	}

	return (
		<ListItem onClick={onClick} size={size} inverted={inverted}>
			<Wrapper>
				<Icon size={size} bg={bg} inverted={inverted}>
					{ icon }
				</Icon>
				{size && size === "lg"
					? (
						<LabelWrapper>
							<NameLabel>
								{ name }
							</NameLabel>
							<HelperLabel inverted={inverted}>
								{ label }
							</HelperLabel>
						</LabelWrapper>
					) : null
				}
			</Wrapper>
		</ListItem>
	)
}

export function ApiItem({ size }: { size?: string }) {
	return <Item href='/docs/05-api/01-introduction' size={size} icon={(<StyledPackage size={40} />)} name="API" label="Explore our API reference" />
}

export function DocsItem({ size }: { size?: string }) {
	return <Item href='/docs/01-protocol/01-how-sfpy-works' size={size} icon={(<StyledDocs size={40} />)} name="Docs" label="Read through the protocol specifications" />
}

export function AppItem({ size }: { size?: string }) {
	const { siteConfig } = useDocusaurusContext()
  const { customFields } = siteConfig
	return <Item external={true} href={`${customFields.appUrl}/#/login`} inverted size={size} icon={(<StyledApp reversed size={40} />)} name="App" label="Create and accept payments" />
}

export function PaymentsItem({ size }: { size?: string }) {
	return <Item href='/docs/03-smart-contracts/02-paying-from-a-smart-contract' size={size} icon={(<StyledGlobe size={40} />)} name="Payments" label="" />
}

export function FlashLoanItem({ size }: { size?: string }) {
	return <Item inverted href='/docs/03-smart-contracts/05-using-flash-loans' size={size} icon={(<StyledCloud reversed size={40} />)} name="Flash Loans" label="" />
}

export function FlashAppItem({ size }: { size?: string }) {
	return <Item href='/docs/03-smart-contracts/06-using-flash-apps' size={size} icon={(<StyledLayers size={40} />)} name="Flash Apps" label="" />
}

export function GitHubItem({ size }: { size?: string }) {
	const { siteConfig } = useDocusaurusContext()
	const { customFields } = siteConfig
	return <Item external={true} href={customFields.githubUrl} bg={'#242A2E'} size={size} icon={(<Github width={50} height={40} fill={'white'} />)} name="GitHub" label="" />
}

export function TwitterItem({ size }: { size?: string }) {
	const { siteConfig } = useDocusaurusContext()
	const { customFields } = siteConfig
	return <Item external={true} href={customFields.twitterUrl} bg={'#1DA1F2'} size={size} icon={(<Twitter width={50} height={40} />)} name="Twitter" label="" />
}

export function DiscordItem({ size }: { size?: string }) {
	const { siteConfig } = useDocusaurusContext()
	const { customFields } = siteConfig
	return <Item external={true} href={customFields.discordUrl} bg={'#7289da'} size={size} icon={(<Discord width={50} height={40} />)} name="Twitter" label="" />
}