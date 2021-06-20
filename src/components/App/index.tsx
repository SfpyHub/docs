import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppBody } from '../AppBody'
import { Header } from '../Header'
import { Hero } from '../Hero'
import { Sidekick } from '../Sidekick'
import { Body } from '../Body'
import { Features } from '../Features'
import { FlashApps } from '../FlashApps'
import { FlashLoans } from '../FlashLoans'
import { Resources } from '../Resources'
import { Footer } from '../Footer'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  background: ${({ theme }) => theme.bg1};
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

export default function App() {
  const [loaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, []);

  return (
    <AppWrapper style={{display: loaded ? 'flex' : 'none'}}>
      <BodyWrapper>
        <AppBody>
          <Header />
          <Hero />
          <Sidekick />
          <Body />
          <Features />
          <FlashApps />
          <FlashLoans />
          <Resources />
          <Footer />
        </AppBody>
      </BodyWrapper>
    </AppWrapper>
  )
}