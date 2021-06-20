import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Copy, ExternalLink } from 'react-feather'
import { AutoColumn } from '../Column'
import Row, { AutoRow, RowCenter } from '../Row'
import { ReceiverPanel } from './ReceiverPanel'
import { ButtonPrimary } from '../Button'
import { LineItems } from './LineItemList'
import useBaseUrl from '@docusaurus/useBaseUrl';


const flyin = keyframes`
	from {
		transform: none;
	}
  to {
    transform: scale(.75) translateY(-50px);
	}
`

const createFlyUp = keyframes`
	from {
		transform: initial;
	}
	to {
    min-height: 0;
    transform: translateY(-34px) scale(.95);
  }
`

const createFlyUpMd = keyframes`
	from {
		transform: initial;
	}
	to {
    transform: translateY(-34px) scale(.95);
  }
`

const createFlyUpLg = keyframes`
	from {
		transform: initial;
	}
	to {
    transform: translateY(-50px) scale(.95)
  }
`

const imgreveal = keyframes`
  from {
      opacity: 1
  }

  to {
      opacity: .4
  }
`

const AnimationWrapper = styled.div<{inView: boolean}>`
	position: relative!important;
	border-radius: 6px;
	margin-right: -4px;
	margin-left: -4px;
	font-size: .8125rem;
  padding-top: 68.10897%;
  ${({ inView }) =>
		inView
		? css`
				visibility: visible !important;
  			animation: ${createFlyUp} .7s ease 4s both;
			`
			: null}

	${({ theme, inView }) =>
		inView
		? theme.mediaWidth.upToSmall`
	    	min-height: 0;
	    	animation: ${createFlyUp} .7s ease 4s both;
	  `
			: null}

  ${({ theme, inView }) =>
		inView
		? theme.mediaWidth.upToMedium`
	     	margin-right: 0;
		    margin-left: 0;
		    animation: ${createFlyUpMd} .7s ease 4s both;
	  `
			: null}

	${({ theme, inView }) =>
		inView
		? theme.mediaWidth.upToMedium`
	     	margin-right: 0;
		    margin-left: 0;
		    animation: ${createFlyUpLg} .7s ease 4s both;
	  `
			: null}
`

const Container = styled.div<{inView: boolean}>`
	display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
	${({ inView }) =>
		inView
		? css`
				visibility: visible !important;
  			animation: ${imgreveal} .7s ease 4s both;
			`
			: null}
`

export const BodyWrapper = styled.div`
  position: relative;
  max-width: 320px;
  width: 100%;
  transform: scale(0.8) translateY(-50px);
  background: ${({ theme }) => theme.bg1};
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%);
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.bg5};
  overflow: hidden;
  

  ${({ theme }) => theme.mediaWidth.upToSmall`
    transform: scale(0.8);
  `};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    transform: scale(0.9);
  `};

  ${({ theme }) => theme.mediaWidth.upToLarge`
    transform: scale(1);
  `};
`

export const Wrapper = styled.div`
  position: relative;
`

const InputPanel = styled.div`
	border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.bg5};
  background-color: ${({ theme }) => theme.bg1};
`

const InputRow = styled.div<{ selected: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  padding: 1.5rem 0.75rem 1.5rem 1rem;
`

const Button = styled(motion.button)`
	padding: ${({ padding }) => (padding ? padding : '18px')};
	width: ${({ width }) => (width ? width : '100%')};
	border-radius: 8px;
	border: 1px solid transparent;
	background-color: ${({ theme }) => theme.primary1};
	color: white;
`

const Modal = styled(motion.div)`
	padding: ${({ padding }) => (padding ? padding : '1rem')};
	background-color: ${({ theme }) => theme.bg2};
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	transform: translateY(200%) translateZ(0px);
  right: 0;
  left: 0;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.bg5};
  border-radius: 8px;
  justify-content: space-around;
  z-index: 4;
`

const StyledCheckCircle = styled(CheckCircle)`
	color: ${({ theme }) => theme.primary1};
`

const Link = styled.div`
	font-family: var(--ifm-font-family-light);
	color: ${({ theme }) => theme.text1};
	font-size: 2.5rem;
  font-weight: 600;
`

const StyledCopy = styled(Copy)`
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.text2};
`

const StyledExternalLink = styled(ExternalLink)`
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.text2};
`

const button = {
  rest: { 
  	scale: 1 
  },
  pressed: { 
  	scale: [0.95, 1],
  	transition: {
      duration: 0.5,
      delay: 2.6,
      ease: "easeOut"
    }
  }
};

const modal = {
	rest: {
		transform: "translateY(200%) translateZ(0px)",
    opacity: 0
	},
	visible: {
		opacity: 1,
		transform: "translateY(50%) translateZ(0px)",
		transition: {
      type: "spring", 
      duration: 0.8,
      bounce: 0.3,
      delay: 3,
      ease: "easeOut"
    }
	}
}

export function Creator({ inView }: { inView: boolean }) {
	const imgUrl = useBaseUrl('img/create-2.png');
	return (
		<AnimationWrapper inView={inView}>
			<Container inView={inView}>
				<BodyWrapper>
					<Wrapper>
						{inView && (
							<Modal variants={modal} animate="visible" initial="rest" exit="rest">
								<Link>$1,850</Link>
								<RowCenter>
									<RowCenter>Copy link <StyledCopy size={16} /></RowCenter>
									<RowCenter>View request <StyledExternalLink size={16} /></RowCenter>
								</RowCenter>
							</Modal>
						)}
						<AutoColumn gap="md">
							<ReceiverPanel />
						</AutoColumn>
						<AutoColumn justify="space-between">
	            <AutoRow justify={'center'} style={{ padding: '1rem 0rem' }} />
	          </AutoColumn>
						<AutoColumn gap="md">
							<AnimatePresence>
								{inView && (
									<>
										<LineItems />
										<Button variants={button} animate="pressed" initial="rest" exit="rest">
											Create Request
										</Button>
									</>
								)}
							</AnimatePresence>
						</AutoColumn>
					</Wrapper>
				</BodyWrapper>
			</Container>
		</AnimationWrapper>
	)
}