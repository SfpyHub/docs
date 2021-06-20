import React from 'react'
import styled, { css, keyframes } from 'styled-components'

export const TerminalWrapper = styled.div`
	width: 100%;
	height: 300px;
	overflow: scroll;
	background: ${({ theme }) => theme.terminalBG};
  box-shadow: 0 0 0 1px hsl(0deg 0% 100% / 10%), 0 34px 65px #040d21, 0 2.76726px 2.21381px rgb(0 0 0 / 7%), 0 6.6501px 5.32008px rgb(0 0 0 / 4%), 0 12.5216px 10.0172px rgb(0 0 0 / 3%), 0 22.3363px 17.869px rgb(0 0 0 / 3%), 0 41.7776px 33.4221px rgb(0 0 0 / 2%), 0 100px 80px rgb(0 0 0 / 2%);
  border-radius: 6px!important;
	color: #fff;
  font-size: 18px;
  font-family: 'Fira Mono', Consolas, Menlo, Monaco, 'Courier New', Courier, monospace;
  border-radius: 4px;
  padding: 40px 0px 0px;
  position: relative;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;

  ::-webkit-scrollbar {
	  display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;

  :before {
  	content: '';
	  position: absolute;
	  top: 15px;
	  left: 15px;
	  display: inline-block;
	  width: 10px;
	  height: 10px;
	  border-radius: 50%;
	  /* A little hack to display the window buttons in one pseudo element. */
	  background: #d9515d;
	  -webkit-box-shadow: 20px 0 0 #f4c025, 40px 0 0 #3ec930;
	          box-shadow: 20px 0 0 #f4c025, 40px 0 0 #3ec930;
  }

  :after {
	  content: '';
	  position: absolute;
	  color: ${({ theme }) => theme.text1};
	  top: 5px;
	  left: 0;
	  width: 100%;
	  text-align: center;
	}
`

export const TerminalBox = styled.div`
	height: 100%;
	width: 100%;
	padding: 0 7px;
	overflow: scroll;

	::-webkit-scrollbar {
	  display: none;
	}

	-ms-overflow-style: none;
	scrollbar-width: none;
`

export const TerminalContainer = styled.div`
	max-height: 600px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

export const Line = styled.div`
  line-height: 1.5;

  :before {
	  /* Set up defaults and ensure empty lines are displayed. */
	  content: '';
	  display: inline-block;
	  vertical-align: middle;
	  color: ${({ theme }) => theme.primary1};
	}
`

export const Terminal = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  font-size: .875rem!important;
  padding-bottom: 35px;
`

const blink = keyframes`
  50% {
    opacity: 0;
  }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
  	transform: rotate(90deg);	
  }
  50% {
  	transform: rotate(180deg);	
  }
  100% {
    transform: rotate(360deg);
  }
`

export const TerminalLineWrapper = styled.div`
	display: flex;
`

export const TerminalLine = styled.span`
	font-size: .8125rem;
	:before {
		margin-right: 0.75rem;
	  content: '~';
	  color: #ea4aaa;
	}
`

export const TerminalInput = styled.span<{active?: boolean}>`
	font-size: .8125rem;
	word-break: break-all;
  ${({ active }) => 
  	active && 
  	css `
  	:before {
  		content: '▋';
  		color: hsla(0,0%,100%,.6);
		  font-family: monospace;
		  margin-left: 0.2em;
		  animation: ${blink} 0.75s infinite;
		}`}
`

export const TerminalLoader = styled.span`
	font-size: .8125rem;
	width: 7px;
	height: 15px;
	background: #0dbc79;
	margin-left: 0.2rem;
	margin-top: 0.2rem;
	animation: ${rotate} 0.25s infinite;
`