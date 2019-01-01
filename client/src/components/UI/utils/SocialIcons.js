import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
        color: ${({theme}) => theme.fontColorLight};
    }
`

const SocialIcons = () =>
    <SocialIconsWrapper>
        <FontAwesomeIcon icon={['fab', 'facebook-square']} />
        <FontAwesomeIcon icon={['fab', 'youtube-square']} />
        <FontAwesomeIcon icon={['fab', 'twitter-square']} />
        <FontAwesomeIcon icon={['fab', 'instagram']} />
    </SocialIconsWrapper>

export default SocialIcons
