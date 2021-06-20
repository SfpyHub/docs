import React from 'react'
import styled from 'styled-components'

const BodyWrapper = styled.div``

const ContentWrapper = styled.div``

export function AppBody({ children }: { children: React.ReactNode }) {
  return (
    <BodyWrapper>
      <main>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </main>
    </BodyWrapper>
  )
}
