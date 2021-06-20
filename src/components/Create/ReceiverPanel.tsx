import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import Row, { RowBetween } from '../Row'
import useBaseUrl from '@docusaurus/useBaseUrl';

const InputPanel = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.bg2};
  z-index: 1;
`

const Container = styled.div`
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.bg2};
  background-color: ${({ theme }) => theme.bg1};
`

const Details = styled.div`
  padding-left: 15px;
  padding-right: 15px;
`

const MerchantLogoLink = styled.div`
  margin-left: -4px;
  margin-bottom: 15px;
  width: 25%;
  margin-top: -18%;
  min-width: 49px;
  outline-style: none;
  transition-property: background-color, box-shadow;
  transition-duration: 0.2s;
  background-color: ${({ theme }) => theme.bg1};
  border: 4px solid ${({ theme }) => theme.bg1};
  border-radius: 9999px;
  overflow: hidden;
  z-index: 0;
`

export const DataCard = styled(AutoColumn)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const Padder = styled.div`
  width: 100%;
  padding-bottom: 33.33%;
`

const MerchantLogoPadder = styled(Padder)`
  padding-bottom: 100%;
`

const MerchantLogo = styled.div`
  border-radius: 9999px;
  overflow: hidden;
  width: 100px;
  height: 100px;
`

export const CardBGContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`

export const CardBGWrapper = styled.div`
  flex-basis: auto;
  z-index: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`

export const CardImg = styled.img`
  bottom: 0px;
  height: 100%;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  z-index: -1;
`

const MerchantName = styled(Row)`
	font-size: 16px;
  font-weight: 600;
  margin-top: -15px;
  margin-right: -66px;
`

export function ReceiverPanel() {
	const logo = useBaseUrl('img/safepay-logo.jpeg')
	const bg = useBaseUrl('img/safepay-background.jpeg')
	return (
		<InputPanel>
      <Container>
        <AutoColumn gap={'md'}>
        	<DataCard>
            <Padder />
            <CardBGContainer>
              <CardBGWrapper>
                <CardImg src={bg} />
              </CardBGWrapper>
            </CardBGContainer>
          </DataCard>
          <Details>
            <RowBetween>
              <MerchantLogoLink>
                <DataCard>
                  <MerchantLogoPadder />
                  <CardBGContainer>
                    <MerchantLogo>
                      <CardImg src={logo} />
                    </MerchantLogo>
                  </CardBGContainer>
                </DataCard>
              </MerchantLogoLink>
              <MerchantName>
	            	<span fontWeight={700}>Acme, Inc.</span>
	            </MerchantName>
            </RowBetween>
            
          </Details>
        </AutoColumn>
      </Container>
    </InputPanel>
	)
}