import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: blueviolet;
`

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <Text>
      {title} {description} {author}
    </Text>
  )
}

export default InfoPage
