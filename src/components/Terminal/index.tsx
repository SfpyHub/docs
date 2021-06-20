import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import Typist from 'react-typist';
import {
	TerminalWrapper,
	TerminalBox,
	TerminalContainer,
	TerminalInput,
	TerminalLineWrapper,
	TerminalLoader,
	TerminalLine,
	Terminal,
	Line
} from './styled'

export enum LineType {
  Input,
  Output
}

export enum ColorMode {
  Light,
  Dark
}

export interface Props {
  name?: string
  prompt?: string
  colorMode?: ColorMode
  inputData: Array<{type: LineType, value: string}>
  outputData: Array<{type: LineType, value: string}> 
  onInput?: ((input: string) => void) | null | undefined,
  startingInputValue?: string
}

export function ZamTerminal({ name, prompt, colorMode, inputData, outputData, onInput, startingInputValue = "" }: Props) {
	const [currentLineInput, setCurrentLineInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [typingDone, setTypingDone] = useState(false)
	const [currentHeight, setCurrentHeight] = useState(0)

	const terminalRef = useRef<null | HTMLElement>(null)
	const lastLineRef = useRef<null | HTMLElement>(null)

	const updateCurrentLineInput = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentLineInput(event.target.value)
	}

	const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
		if (onInput != null && event.key === 'Enter') {
      onInput(currentLineInput)
      setCurrentLineInput('')
    }
	}

	useEffect(() => {
		setCurrentLineInput(startingInputValue.trim())
	}, [startingInputValue])

	// An effect that handles scrolling into view the last line of terminal input or output
	useEffect(() => {
		if (currentHeight < 200) {
			return
		}
		terminalRef.current.parentElement.scrollTop = terminalRef.current.parentElement.scrollHeight
	}, [currentHeight, terminalRef])

	const renderedLineData = inputData.map((ld, i) => {
		return (
			<TerminalInput input={ld.type === LineType.Input} key={ i }>
				{ ld.value }<br />
			</TerminalInput>
		)
	})

	const renderedOutputData = outputData.map((ld, i) => {
		return (
			<TerminalInput input={false} key={ i }>
				{ ld.value }<br />
			</TerminalInput>
		)
	})

	const onTypingDone = () => {
		startLoading()
		setTimeout(() => {
			setDone()
		}, 1500)
	}

	const setHeight = (height: number) => {
		setCurrentHeight(height)
	}

	const startLoading = () => {
		setLoading(true)
		setHeight(terminalRef?.current?.clientHeight)
	}

	const setDone = () => {
		setLoading(false)
		setTypingDone(true)
		setHeight(terminalRef?.current?.clientHeight)
	}

	const onLineTyped = () => {
		setHeight(terminalRef?.current?.clientHeight)
	}

  return (
    <TerminalWrapper>
    	<TerminalBox>
	      <Terminal ref={ terminalRef }>
	      	<Typist cursor={{show: false}} avgTypingDelay={25} onTypingDone={onTypingDone} onLineTyped={onLineTyped}>
	      		<TerminalLine />
	       		{ renderedLineData }
	       	</Typist>
	       	{loading && (
	       		<TerminalLineWrapper>
	       			<TerminalLine />
	       			<TerminalLoader />
	       		</TerminalLineWrapper>
	       	)}
	       	{typingDone && (
	       		<>
		       		{ renderedOutputData }
		       		<TerminalLineWrapper ref={ lastLineRef }>
								<TerminalLine />
						    <TerminalInput active>
						    	{ currentLineInput }
						    </TerminalInput>
						  </TerminalLineWrapper>
					  </>
	       	)}
	      </Terminal>
	    </TerminalBox>
    </TerminalWrapper>
  );

}