import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { below } from '../../../styles/mediaQueries'

//fixed data
const SOCIALS = [
    {
        name: 'facebook-square'
    },
    {
        name: 'youtube-square'
    },
    {
        name: 'twitter-square'
    },
    {
        name: 'instagram'
    }
]

//styled components
const SocialIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18rem;
    background-color: 'transparent';
    margin-right: auto;

    svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.fontColorLight};
    }

    ${below.medium`
        display: none;
    `}
`

const SocialIcons = () =>
    <SocialIconsWrapper>
        {
            SOCIALS.map(({ name }) => <FontAwesomeIcon key={name} icon={['fab', `${name}`]} />)
        }
    </SocialIconsWrapper>

export default SocialIcons
