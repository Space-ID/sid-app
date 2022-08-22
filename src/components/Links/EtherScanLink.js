import React from 'react'
import styled from '@emotion/styled/macro'
import { ReactComponent as ExternalLinkIcon } from '../Icons/externalLink.svg'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client'

const EtherScanLinkContainer = styled('a')`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;

  svg {
    margin-left: 10px;
    transition: 0.1s;
    opacity: 0;
    flex-shrink: 0;
    opacity: 1;
  }
`

export const GET_ETHER_SCAN_LINK = gql`
  query getEtherScanLink @client {
    network
  }
`

const EtherScanLink = ({ children, address, className }) => {
  const {
    data: { network }
  } = useQuery(GET_ETHER_SCAN_LINK)
  const subdomain = network?.toLowerCase() === 'main' ? '' : `${network}.`
  return (
    <EtherScanLinkContainer
      data-testid="ether-scan-link-container"
      target="_blank"
      rel="noopener"
      href={`https://testnet.bscscan.com/address/${address}`}
      className={className}
    >
      <div>{children}</div>
      <ExternalLinkIcon />
    </EtherScanLinkContainer>
  )
}

export default EtherScanLink
